<template>
  <div class="app-nav p-(--sm) text-md uppercase leading-[0.9]">
    <div class="logo">
      <nuxt-link to="/"><InauditaLogo/></nuxt-link>
    </div>
    <div class="app-nav-links text-right md:text-center">
      <NuxtLink to="/films">Películas,</NuxtLink>
      <NuxtLink to="/in-development">En desarrollo,</NuxtLink>
      <NuxtLink to="/news">Noticias,</NuxtLink>
      <NuxtLink to="/about">Nosotros</NuxtLink>
    </div>
    <div class="app-nav-mail text-center md:text-right"><a href="mailto:info@inauditafilms.com">info@<br class="hidden md:block">inauditafilms.com</a></div>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import { onMounted } from 'vue'
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

  .toggle-nav {
    display: none;
  }

  &-links {
    display: flex;
    max-width: 25ch;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: var(--xs)
  }

  &-mail {
    display: block;
  }

  .logo {
    svg {
      height: 1.75em;
      width: auto;
    }
  }
}

@media (max-width: 1000px) {
  .app-nav {
    display: flex;
    width: 100%;

    &-links {
      justify-content: flex-end;
    }

    .logo {
      display: flex;
      align-content: center;
      justify-content: center;
      align-items: center;
    }

    .app-nav-mail {
      display: none;
    }
  }
}
</style>