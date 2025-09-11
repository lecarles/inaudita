<template>
  <div class="films-page">
    <nuxt-link v-for="film in films.data.stories" class="film-item" :key="film._uid" :to="`/films/${film.slug}`">
      <img v-if="film.content.poster" :src="film.content.poster.filename" :alt="film.content.title" />
    </nuxt-link>
  </div>
</template>

<script setup>
const storyblokApi = useStoryblokApi()
const films = await storyblokApi.get('cdn/stories/', {
  starts_with: 'in-development',
  sort_by: 'content.releaseDate:desc',
  per_page: 40
})
</script>

<style lang="scss" scoped>
.films-page {
  margin: var(--nav-height) var(--sm) var(--sm);
  background: var(--color-black);
  padding: var(--sm);
  display: grid;
  grid-template-columns: repeat( auto-fill, minmax(400px, 1fr) );
  grid-template-rows: auto;
  gap: var(--sm);

  .film-item {
    background: var(--color-white);
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