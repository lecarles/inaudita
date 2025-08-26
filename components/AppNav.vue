<template>
  <div class="app-nav p-(--sm) text-md uppercase leading-[0.9]">
    <div class="logo">
      <InauditaLogo />
    </div>
    <div class=" app-nav-links text-center">
      <NuxtLink to="/peliculas">Películas,</NuxtLink>
      <NuxtLink to="/en-desarrollo">En desarrollo,</NuxtLink>
      <NuxtLink to="/noticias">Noticias,</NuxtLink>
      <NuxtLink to="/nosotros">Nosotros</NuxtLink>
    </div>
    <div class="text-right"><a href="mailto:info@inauditafilms.com">info@<br>inauditafilms.com</a></div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.app-nav {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  background: var(--color-red);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 20;

  &-links {
    display: flex;
    max-width: 25ch;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: var(--xs)
  }

  .logo {
    svg {
      height: 1.75em;
      width: auto;
    }
  }
}
</style>