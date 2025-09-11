<template>
  <div class="films-carousel text-white text-center uppercase">
    <div ref="stillsArr" v-for="(film, i) in films.data.stories" :key="i" class="still">
      <nuxt-link :to="`/films/${film.slug}`" class="still-link">
        <div class="text-xl z-1 leading-[0.9] text-balance">{{ film.content.title }}</div>
        <div class="text-base z-1 leading-[0.9] mt-1">{{film.content.year}}{{film.content.duration}}</div>
        <video :src="`/video/${film.content.video}`" autoplay muted loop playsinline></video>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
import horizontalLoop from '~/helpers/horizontalLoop'
import gsap from 'gsap'
import { onMounted, ref } from 'vue'

const storyblokApi = useStoryblokApi()
const films = await storyblokApi.get('cdn/stories/', {
  starts_with: 'films',
  filter_query: {
    'home': {
      is: true
    }
  },
})

const props = defineProps({
  stills: Array,
  letterbox: Boolean
})

const stillsArr = ref(null)

onMounted(() => {
  let stillsTl = gsap.timeline({
    repeat: -1,
    defaults: { duration: 0.02, ease: 'none' },
  })
  gsap.set(stillsArr.value[0], { opacity: 1 })
  for (let i = 1; i < stillsArr.value.length; i++) {
    stillsTl.to(stillsArr.value[i], { opacity: 1 }, '<11.5')
    stillsTl.to(stillsArr.value[i-1], { opacity: 0 }, '<0.01')
  }
  stillsTl.to(stillsArr.value[0], { opacity: 1 }, '<11.5')
  stillsTl.to(stillsArr.value[stillsArr.value.length - 1], { opacity: 0 }, '<0.01')
})

</script>

<style lang="scss">
.films-carousel {
  position: relative;
  width: 100%;
  height: calc(100dvh - var(--nav-height) - var(--sm));
  background: var(--color-black);

  .still {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0;
    object-fit: cover;
    display: flex;

    &-link {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      padding: var(--lg);
      width: 100%;
      height: 100%;
    }

    video {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>