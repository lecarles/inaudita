<template>
  <div>
    <div class="film-list text-lg text-center uppercase leading-[0.8]">
      <nuxt-link v-for="(film, i) in 8" :key="i" class="film-item">
        <div class="film-item-data-primary text-left">Info 1</div>
        <div class="film-item-data-title text-xl leading-[0.8]">Film {{ i }}</div>
        <div class="film-item-data-secondary text-right">Info 2</div>
      </nuxt-link>
    </div>
    <div class="py-(--xl) text-lg w-full uppercase text-center">
      <NuxtLink to="/films" class="w-full text-center">Ver más</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
.film-list {
  a {
    display: grid;
    grid-template-columns: 20ch 1fr 20ch;
    border-bottom: 1px solid var(--color-black);
    padding: var(--sm) 0;

    &:last-child {
      border-bottom: none;
    }
  }
}
</style>