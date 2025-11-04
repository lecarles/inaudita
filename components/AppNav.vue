<template>
  <div class="app-nav p-(--sm) text-md uppercase leading-[0.9]">
    <div class="logo">
      <nuxt-link to="/"><InauditaLogo/></nuxt-link>
    </div>
    <div class="app-nav-links ml-auto text-right">
      <NuxtLink to="/films">Películas</NuxtLink>
      <NuxtLink to="/in-development">En desarrollo</NuxtLink>
      <NuxtLink to="/news">Noticias</NuxtLink>
      <NuxtLink to="/about">Nosotros</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import { onMounted } from 'vue'
</script>

<style lang="scss" scoped>
.app-nav {
  display: flex;
  background: var(--color-background);
  color: var(--color-foreground);
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
    justify-content: flex-end;
    column-gap: .65em;
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