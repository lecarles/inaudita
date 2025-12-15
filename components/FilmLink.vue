<template>
  <nuxt-link class="film-link" :to="`/films/${film.slug}`" @mouseenter="mouseenter()" @mouseleave="mouseleave()">
    <div class="film-preview relative">
      <img class="absolute top-0" v-if="film.content.coverImage" :src="film.content.coverImage.filename + '/m/800x0'" :alt="film.content.title" />
      <video ref="video" :src="`/video/${film.content.video}`" loop playsinline muted :alt="film.content.title" />
    </div>      
    <div class="film-link-info grid p-(--xs)">
      <div class="uppercase text-sm">({{film.content.releaseDate.slice(0, 4)}})</div>
      <div class="text-center film-link-title leading-[0.95]">{{ film.content.title }}</div>
      <div class="uppercase text-sm text-right">({{film.content.duration}}’)</div>
    </div>
  </nuxt-link>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const video = ref(null)

const props = defineProps({
  film: {
    type: Object,
    required: true
  }
})

function mouseenter() {
  video.value.play()
}

function mouseleave() {
  video.value.pause()
}

onMounted(() => {
  let mm = gsap.matchMedia();

  mm.add("(min-width: 100px)", () => {
    // desktop setup code here...
  })

  mm.add("(max-width: 999px)", () => {
    video.value.play()
  })
})
</script>

<style lang="scss" scoped>
.film-link {
  img, video {
    width: 100%;
    height: auto;
    object-fit: cover;
    aspect-ratio: 16/9;
  }

  &:hover img {
    opacity: 0;
  }

  img {
    pointer-events: none;
    transition: opacity 0.2s ease;
  }

  &-title {
    font-size: var(--text-lg);
  }

  &-info {
    grid-template-columns: 5ch 1fr 5ch;
  }

  &:has(~ .film-link:hover) {
    opacity: 0.5;
  }

  &:hover ~ .film-link {
    opacity: 0.5;
  }

  &:hover {
    color: var(--color-primary);
  }

  grid-column: span 4;
  transition: opacity 0.2s ease;
}

.film-link:nth-child(1), .film-link:nth-child(2), .film-link:nth-child(3), .film-link:nth-child(4) {
  grid-column: span 6;

  .film-link-title {
    font-size: var(--text-xl);
  }
}

@media (max-width: 1000px) {
  .film-link {
    img {
      display: none;
    }
  }
}
</style>