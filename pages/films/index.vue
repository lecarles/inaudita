<template>
  <div class="films-page pt-(--md) pb-(--lg) md:px-(--xl)">
    <nuxt-link v-for="film in films.data.stories" class="film-item" :key="film._uid" :to="`/films/${film.slug}`">
      <img v-if="film.content.poster" :src="film.content.poster.filename" :alt="film.content.title" />
    </nuxt-link>
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
  margin: var(--nav-height) auto 0;
  background: var(--color-background);
  display: grid;
  grid-template-columns: repeat( auto-fill, minmax(320px, 1fr));
  grid-template-rows: auto;
  gap: var(--lg);
  max-width: 2400px;

  .film-item {
    background: var(--color-foreground);
    aspect-ratio: 1 / 1.4;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
}

@media (max-width: 900px) {
  .films-page {
    grid-template-columns: repeat( auto-fill, minmax(280px, 1fr) );
  }
}
</style>