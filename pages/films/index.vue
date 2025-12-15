<template>
  <div class="films-page pb-(--lg)">
    <film-link v-for="film in films.data.stories" :key="film._uid" :film="film" />
  </div>
</template>

<script setup>
const storyblokApi = useStoryblokApi()
const films = await storyblokApi.get('cdn/stories/', {
  starts_with: 'films',
  sort_by: 'content.releaseDate:desc',
  per_page: 40
})

useServerSeoMeta({
  title: 'Inaudita - Películas'
})
</script>

<style lang="scss" scoped>
.films-page {
  margin: var(--nav-height) 0 var(--xl);
  background: var(--color-background);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  row-gap: var(--lg);
  min-height: calc(100dvh - var(--nav-height) - var(--sm) * 2);
}

@media (max-width: 900px) {
  .films-page {
    grid-template-columns: repeat( auto-fill, minmax(280px, 1fr) );
  }
}
</style>