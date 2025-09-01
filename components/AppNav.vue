<template>
  <div class="app-nav p-(--sm) text-lg md:text-md uppercase leading-[0.9]">
    <div class="logo">
      <nuxt-link to="/"><InauditaLogo/></nuxt-link>
      <button class="toggle-nav" @click="toggleNav">+</button>
    </div>
    <div class="app-nav-links text-center">
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

let navTl = null
let isNavOpen = false

function toggleNav() {
  isNavOpen = !isNavOpen
  if (isNavOpen) {
    navTl.play()
  } else {
    navTl.reverse()
  }
}

onMounted(() => {
  navTl = gsap.timeline({ paused: true })
  navTl.set('.app-nav-links', { display: 'flex'})
  navTl.set('.app-nav-mail', { display: 'block'})
})
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
    grid-template-columns: 1fr;

    .toggle-nav {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      color: var(--color-black);
      height: 1.75em;
      width: 1.75em;
      padding: var(--sm);
    }

    .logo {
      display: flex;
      align-content: center;
      justify-content: center;
      align-items: center;
    }

    .app-nav-links, .app-nav-mail {
      display: none;
      padding-top: var(--sm);
    }

    .toggle-nav {
      display: block;
      background: none;
      border: none;
      color: var(--color-white);
      font-size: 2rem;
      line-height: 1;
      cursor: pointer;
    }
  }
}
</style>