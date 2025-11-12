<template>
  <div>
    <div class="film-list text-lg text-center uppercase leading-[0.8]">
      <nuxt-link v-for="film in films.data.stories" :key="film._uid" class="film-item" :to="`/films/${film.slug}`">
        <div class="film-item-data-primary text-base leading-[0.9]  text-left pl-2">{{film.content.duration}}’ ({{film.content.releaseDate.slice(0, 4)}})</div>
        <div class="film-item-data-title text-xl leading-[0.8] text-balance">{{ film.content.title}}</div>
        <div class="film-item-data-secondary text-base leading-[0.9] text-right pr-2 text-balance">{{ film.content.shortText }}</div>
      </nuxt-link>
    </div>
    <div class="py-(--xl) text-lg w-full uppercase text-center">
      <NuxtLink to="/films" class="w-full text-center">Ver más</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const storyblokApi = useStoryblokApi()
const films = await storyblokApi.get('cdn/stories/', {
  starts_with: 'films',
  sort_by: 'content.releaseDate:desc',
  per_page: 8
})
</script>

<style lang="scss">
.film-list {
  .film-item {
    display: grid;
    grid-template-columns: 12ch 1fr 12ch;
    border-top: 1px solid var(--color-white);
    padding: var(--sm);
    color: var(--color-white);
    overflow: hidden;

    &:hover {
      color: var(--color-yellow);
    }

    &:last-child {
      border-bottom: none;
    }
  }
}

@media (max-width: 1000px) {
  .film-list {
    .film-item {
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;

      .film-item-data-primary,.film-item-data-secondary {
        display: none;
      }
    }
  }
}
</style>