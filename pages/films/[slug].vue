<template>
  <FilmPage :movie="movie" />
  <inaudita-footer />
</template>

<script setup>
const { slug } = useRoute().params

const storyblokApi = useStoryblokApi()
const movie = await storyblokApi.get('cdn/stories/films/' + slug)

useServerSeoMeta({
  title: () => 'Inaudita - ' + movie.data.story.content.title,
})
</script>