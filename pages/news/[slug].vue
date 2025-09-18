<template>
  <div class="news-page">
    <div class="news-header">
      <div class="news-headline text-white text-xl leading-[0.9] uppercase">{{ news.data.story.content.headline }}</div>
      <img :src="news.data.story.content.image.filename + '/m/1200x0'" alt="">
    </div>
    <div class="news-content mt-(--sm) text-white bg-black py-(--lg) px-(--sm)">
      <div class="text-base uppercase mb-(--md)">{{ new Date(news.data.story.first_published_at).toLocaleDateString('es', { year: 'numeric', month: 'long', day: 'numeric' }) }}</div>
      <div v-html="renderRichText(news.data.story.content.body)"></div>
    </div>
  </div>
  <inaudita-footer />
</template>

<script setup>
const { slug } = useRoute().params

const storyblokApi = useStoryblokApi()
const news = await storyblokApi.get('cdn/stories/news/' + slug)

useServerSeoMeta({
  title: () => 'Inaudita - ' + news.data.story.content.title,
})
</script>

<style lang="scss">
.news-page {
  padding: 0 var(--sm);
  margin-top: var(--nav-height);

  .news-header {
    position: relative;
    background: var(--color-black);
    width: 100%;
    padding: var(--sm);
    height: calc(100dvh - var(--nav-height) - var(--sm));
    display: flex;
    align-items: flex-end;
    justify-content: center;

    .news-headline {
      z-index: 10;
      text-wrap: balance;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .news-content {
    min-height: calc(100dvh - var(--nav-height) - var(--sm) * 2);
    
    p {
      margin-bottom: var(--sm);
      max-width: 65ch;
      font-size: var(--text-md);
      line-height: 1.1;
      text-wrap: pretty;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>