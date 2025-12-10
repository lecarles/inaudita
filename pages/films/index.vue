<template>
  <div class="films-page pt-(--md) pb-(--lg)">
    <nuxt-link v-for="film in films.data.stories" class="film-link" :key="film._uid" :to="`/films/${film.slug}`">
      <video :src="`/video/${film.content.video}`" loop playsinline muted :alt="film.content.title" @mouseenter="($event) => $event.target.play()" @mouseleave="($event) => $event.target.pause()" />
      <div class="film-link-info grid p-(--sm)">
        <div class="uppercase text-sm">({{film.content.releaseDate.slice(0, 4)}})</div>
        <div class="text-center film-link-title leading-[0.95]">{{ film.content.title }}</div>
        <div class="uppercase text-sm text-right">({{film.content.duration}}’)</div>
      </div>
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
  margin: var(--nav-height) 0 var(--xl);
  background: var(--color-background);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  row-gap: var(--lg);
  min-height: calc(100dvh - var(--nav-height) - var(--sm) * 2);

  .film-link:nth-child(1), .film-link:nth-child(2), .film-link:nth-child(3), .film-link:nth-child(4) {
    grid-column: span 6;

    .film-link-title {
      font-size: var(--text-xl);
    }
  }

  img, video {
    width: 100%;
    height: auto;
    object-fit: cover;
    aspect-ratio: 16/9;
  }
}

.film-link {
  &-title {
    font-size: var(--text-lg);
  }

  &-info {
    grid-template-columns: 5ch 1fr 5ch;
  }

  &:has(~ .film-link:hover) {
    opacity: 0.5;
  }

  &:hover ~ .film-link {
    opacity: 0.5;
  }

  &:hover {
    color: var(--color-primary);
  }

  grid-column: span 4;
  transition: opacity 0.2s ease;
}

@media (max-width: 900px) {
  .films-page {
    grid-template-columns: repeat( auto-fill, minmax(280px, 1fr) );
  }
}
</style>