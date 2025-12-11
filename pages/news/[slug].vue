<template>
  <div class="news-page bg-foreground">
    <div class="news-content text-background grid md:grid-cols-2 gap-(--sm)">
      <img :src="news.data.story.content.image.filename + '/m/1200x0'" alt="">
      <div class="p-(--md) pb-(--lg)">
        <div class="text-base font-regular mb-(--md) uppercase">
          {{ new Date(news.data.story.first_published_at).toLocaleDateString('es', { year: 'numeric', month: 'long', day: 'numeric' }) }}
        </div>
        <div class="leading-[0.9] my-(--md) text-xl">{{ news.data.story.content.headline }}</div>
        <div v-html="renderRichText(news.data.story.content.body)"></div>
      </div>
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
  margin-top: var(--nav-height);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }

  .news-content {
    min-height: calc(100dvh - var(--nav-height) - var(--sm) * 2);
    
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