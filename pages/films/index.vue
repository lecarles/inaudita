<template>
  <div class="films-page">
    <div v-for="(item, i) in 15" class="film-item" :key="i"></div>
  </div>
</template>

<script setup>

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
    aspect-ratio: 1 / 1.5;
  }
}
</style>