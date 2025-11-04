<template>
  <div class="in-dev-index p-(--md) md:py-(--md) md:px-(--xl)">
    <nuxt-link :to="`/in-development/${film.slug}`" class="text-foreground" v-for="film in sortedFilms" :key="film._uid">
      <img v-if="film.content.coverImage" :src="film.content.coverImage.filename + '/m/600x0'" alt="">
      <div class="text-base uppercase mt-(--sm)">{{ film.content.state }}</div>
      <div class="text-lg uppercase leading-[0.9] text-balance">{{film.content.title}}</div>
    </nuxt-link>
  </div>
  <inaudita-footer />
</template>

<script setup>
const storyblokApi = useStoryblokApi()
const films = await storyblokApi.get('cdn/stories/', {
  starts_with: 'in-development/',
  per_page: 20
})

// Define the order priority for states
const stateOrder = {
  'postproducción': 1,
  'pre-producción': 2,
  'en desarrollo': 3
}

// Sort films by state according to the specified order
const sortedFilms = computed(() => {
  return films.data.stories.sort((a, b) => {
    const stateA = a.content.state?.toLowerCase() || ''
    const stateB = b.content.state?.toLowerCase() || ''
    
    const orderA = stateOrder[stateA] || 999 // Unknown states go to the end
    const orderB = stateOrder[stateB] || 999
    
    return orderA - orderB
  })
})

useServerSeoMeta({
  title: 'Inaudita - En Desarrollo'
})
</script>

<style lang="scss" scoped>
.in-dev-index {
  margin: var(--nav-height) auto var(--xl);
  background: var(--color-background);
  display: grid;
  grid-template-columns: repeat( auto-fill, minmax(500px, 1fr));
  grid-template-rows: auto;
  column-gap: var(--sm);
  row-gap: var(--lg);
  min-height: calc(100dvh - var(--nav-height) - var(--sm) * 2);
  max-width: 2400px;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    aspect-ratio: 16/9;
  }
}

@media (max-width: 900px) {
  .in-dev-index {
    grid-template-columns: repeat( auto-fill, minmax(250px, 1fr) );
  }
}
</style>