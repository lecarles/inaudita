<template>
  <div class="app-nav p-(--sm) md:text-md text-base uppercase items-center leading-[0.9]">
    <div class="logo mx-auto">
      <nuxt-link to="/">
        <InauditaLogo/>
      </nuxt-link>
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
  width: 100vw;
  z-index: 20;

  a:hover {
    text-decoration: underline;
  }

  .toggle-nav {
    display: none;
  }

  &-links {
    display: flex;
    max-width: 25ch;
    flex-wrap: wrap;
    justify-content: flex-end;
    column-gap: .25em;
  }

  &-mail {
    display: block;
  }

  .logo {
    svg {
      height: 1.1em;
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