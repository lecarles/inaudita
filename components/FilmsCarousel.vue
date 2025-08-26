<template>
  <div class="films-carousel text-white text-center uppercase">
    <div ref="stillsArr" v-for="(i, still) in 4" :key="i" class="still">
      <div class="text-xl">FILM {{ i }}</div>
      <div class="text-base">Film details</div>
    </div>
  </div>
</template>

<script setup>
import horizontalLoop from '~/helpers/horizontalLoop'
import gsap from 'gsap'
import { onMounted, ref } from 'vue'

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
    stillsTl.to(stillsArr.value[i], { opacity: 1 }, '<2.5')
    stillsTl.to(stillsArr.value[i-1], { opacity: 0 }, '<0.1')
  }
  stillsTl.to(stillsArr.value[0], { opacity: 1 }, '<2.5')
  stillsTl.to(stillsArr.value[stillsArr.value.length - 1], { opacity: 0 }, '<0.1')
})

</script>

<style lang="scss">
.films-carousel {
  position: relative;
  width: 100%;
  height: calc(100dvh - var(--nav-height) - var(--sm));

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
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: var(--lg);
  }
}
</style>