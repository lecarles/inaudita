<template>
  <div class="news-index ">
    <nuxt-link :to="`/news/${article.slug}`" class="text-white" v-for="article in news.data.stories" :key="article._uid">
      <img :src="article.content.image.filename + '/m/600x0'" alt="">
      <div class="text-base uppercase mt-(--sm)">{{ new Date(article.first_published_at).toLocaleDateString('es', { year: 'numeric', month: 'long', day: 'numeric' }) }}</div>
      <div class="text-lg uppercase mt-(--sm) leading-[0.9]">{{article.content.headline}}</div>
    </nuxt-link>
  </div>
  <inaudita-footer />
</template>

<script setup>
const storyblokApi = useStoryblokApi()
const news = await storyblokApi.get('cdn/stories/', {
  starts_with: 'news',
  per_page: 20,
  sort_by: 'first_published_at:desc'
})

useServerSeoMeta({
  title: 'Inaudita - Noticias'
})
</script>

<style lang="scss" scoped>
.news-index {
  margin: var(--nav-height) var(--sm) 0;
  background: var(--color-black);
  padding: var(--sm) var(--sm) var(--lg) ;
  display: grid;
  grid-template-columns: repeat( auto-fill, minmax(25vw, 1fr) );
  grid-template-rows: auto;
  column-gap: var(--sm);
  row-gap: var(--md);
  min-height: calc(100dvh - var(--nav-height) - var(--sm) * 2);

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    aspect-ratio: 16/9;
  }
}

@media (max-width: 900px) {
  .news-index {
    grid-template-columns: repeat( auto-fill, minmax(250px, 1fr) );
  }
}
</style>