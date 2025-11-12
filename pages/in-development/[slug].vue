<template>
  <FilmPage :movie="movie" />
</template>

<script setup>
const { slug } = useRoute().params

const storyblokApi = useStoryblokApi()
const movie = await storyblokApi.get('cdn/stories/in-development/' + slug)

useServerSeoMeta({
  title: () => 'Inaudita - ' + movie.data.story.content.title,
})
</script>