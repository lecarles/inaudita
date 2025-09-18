<template>
  <div class="films-carousel text-white text-center uppercase">
    <div ref="stillsArr" v-for="(film, i) in films.data.stories" :key="i" class="still">
      <nuxt-link :to="`/films/${film.slug}`" class="still-link">
        <div class="w-full text-xl z-1 leading-[0.9] text-balance">{{ film.content.title }}</div>
        <div class="text-base z-1 leading-[0.9] mt-(--sm)">
          <div class="film-info gap-(--lg)">
            <div class="text-left">({{film.content.releaseDate.slice(0, 4)}})</div>
            <div>{{film.content.shortText}}</div>
            <div class="text-right">{{film.content.duration}}’</div>
          </div>
          <div class="mt-3 md:mt-1">
            {{ film.content.longText }}
          </div>
        </div>
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
      width: 100%;
      height: 100%;
      padding: var(--lg) calc(var(--spacing) * 6);

      .film-info {
        display: grid;
        grid-template-columns: 5ch 1fr 5ch;
        gap: var(--md);
      }
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