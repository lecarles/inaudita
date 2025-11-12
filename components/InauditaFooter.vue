<template>
  <div class="inaudita-footer text-md p-(--sm)">
    <NuxtLink to="/films">Películas</NuxtLink>
    <NuxtLink to="/in-development">En desarrollo</NuxtLink>
    <NuxtLink to="/news">Noticias</NuxtLink>
    <NuxtLink to="/about">Nosotros</NuxtLink>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
.inaudita-footer {
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  text-transform: uppercase;
  line-height: .9;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: var(--color-background);
  z-index: 10;

  a:hover {
    text-decoration: underline;
  }
}
</style>