<template>
  <div class="inaudita-marquee flex">
    <div v-for="i in 4" :key="i" class="text-3xl font-display leading-[0.8] flex items-end" ref="fesllocText">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import horizontalLoop from '@/helpers/horizontalLoop'
import gsap from 'gsap'

const fesllocText = ref(null)

const props = defineProps({
  speed: {
    type: Number,
    default: 1.2
  },
  direction: {
    type: Number,
    default: -1
  }
})

onMounted(() => {
  let loop = horizontalLoop(fesllocText.value, {paused: false, repeat: -1, speed: props.speed})
  gsap.to(loop, { timeScale: 2 * props.direction })
  const mm = gsap.matchMedia()
  mm.add({
    small: "(max-width: 999px)",
    large: "(min-width: 1000px)",
  }, (ctx) => {
    const { small, large } = ctx.conditions;
    gsap.to(loop, { timeScale: small ? 0.75 * props.direction * props.speed : 1 * props.direction * props.speed })
  })
})
</script>

<style lang="scss" scoped>
.inaudita-marquee {
  overflow: hidden;
  width: 100%;
}
</style>