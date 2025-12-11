<template>
  <div class="app-nav p-(--sm) md:text-md text-base uppercase items-center leading-[0.9]">
    <div class="text-sm text-foreground">
      <a href="mailto:info@inauditafilms.com"><svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg></a>
    </div>
    <div class="logo mx-auto">
      <nuxt-link to="/" class="mx-auto">
        <InauditaLogo/>
      </nuxt-link>
    </div>
    <div class="text-sm text-foreground flex items-center gap-2">
      <a href="https://instagram.com/inauditafilms" target="_blank" rel="noopener"><svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
      <a href="https://www.youtube.com/@inauditafilms/" target="_blank" rel="noopener"><svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube-icon lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg></a>
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
    
    a {
      transition: color 0.2s ease;

      &:hover {
        color: var(--color-primary);
      }
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