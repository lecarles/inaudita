<template>
  <div class="inaudita-home">
    <films-carousel />
    <div class="film-list text-center bg-red p-(--sm) mt-(--sm)">
      <h1 class="leading-[0.9] p-(--md) py-(--xl) md:p-(--xl) text-xl md:text-2xl">APOYAMOS EL CINE EN EL QUE NADIE CONFIA.</h1>
    <film-list />
    </div>
    <div class="home-footer text-white bg-black mt-(--sm)">
      <div class="text-md mb-auto flex uppercase gap-(--md)">
        <a href="https://instagram.com/" target="_blank" rel="noopener">INSTAGRAM</a>
        <a href="mailto:info@inauditafilms.com">info@inauditafilms.com</a>
        <a href="https://youtube.com/" target="_blank" rel="noopener">YOUTUBE</a>
      </div>
      <div class="text-base p-(--md) uppercase leading-[0.9]">
        Hay una electricidad especial que nos recorre cuando escuchamos y vemos al público reaccionar por primera vez ante las obras que les presentamos. Necesitamos sentir esa sensación de placer y alivio como forma de relacionarnos con el mundo.
      </div>
      <inaudita-logo class="mt-auto"/>
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
  padding: 0 var(--sm) var(--sm);
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