<template>
  <div class="news-page">
    <div class="news-header text-lg">
      <img :src="news.data.story.content.image.filename + '/m/1200x0'" alt="">
      <div class="news-headline text-white text-[1.5em] md:text-[2em] text-center p-(--md) max-w-[40ch] leading-[0.9] uppercase">{{ news.data.story.content.headline }}</div>
    </div>
    <div class="news-content mt-(--sm) text-background py-(--lg) px-(--md) grid md:grid-cols-2 gap-(--md)">
      <div class="text-base font-regular mb-(--md)">{{ new Date(news.data.story.first_published_at).toLocaleDateString('es', { year: 'numeric', month: 'long', day: 'numeric' }) }}</div>
      <div v-html="renderRichText(news.data.story.content.body)"></div>
    </div>
  </div>
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
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .news-headline {
      z-index: 10;
      text-wrap: balance;
      height: calc(45dvh - var(--nav-height) - var(--sm) * 2);
      display: flex;
      justify-content: center;
    }

    img {
      width: 100%;
      height: 55dvh;
      object-fit: contain;
    }
  }

  .news-content {
    min-height: calc(100dvh - var(--nav-height) - var(--sm) * 2);
    background-color: var(--color-gray);
    
    p {
      margin-bottom: var(--sm);
      max-width: 65ch;
      font-size: var(--text-md);
      line-height: 1.1;
      text-wrap: pretty;
      font-family: var(--font-regular);

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>