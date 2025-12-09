<template>
  <div class="inaudita-home">
    <films-carousel />
    <div class="film-list text-center p-(--sm) mt-(--sm)">
      <h2 class="leading-[0.9] p-(--md) py-(--xl) text-xl">Apoyamos el cine en el que nadie confía</h2>
    <film-list />
    </div>
  </div>
</template>

<script setup>
const { story } = await useAsyncStoryblok('home', {
  api: {
    version: 'draft'
  },
})

useServerSeoMeta({
  title: 'Inaudita'
})
</script>

<style lang="scss" scoped>
.inaudita-home {
  padding: 0;
  margin-top: var(--nav-height);

  .home-footer {
    text-align: center;
    padding: var(--sm);
    height: calc(100dvh - var(--nav-height) - var(--sm));
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
      transform: translateY(0.15em);
      width: 99.25%;
    }
  }
}
</style>