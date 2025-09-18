<template>
  dev
</template>

<script setup>
const storyblokApi = useStoryblokApi()
const news = await storyblokApi.get('cdn/stories/', {
  starts_with: 'news',
  per_page: 20
})

useServerSeoMeta({
  title: 'Inaudita - En Desarrollo'
})
</script>