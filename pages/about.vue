<template>
  <div class="about-page relative">
    <div class="p-(--sm) mt-(--nav-height)">
      <div class="flex items-center justify-center text-md py-(--lg)">
        <h2 class="text-[1.5em] md:text-[2.25em] max-w-[35ch] mb-4 text-balance text-center leading-[0.98]">{{story.content.headline}}</h2>
      </div>
      <div class="flex items-center justify-center relative mb-(--xl)">
        <img :src="story.content.image.filename" class="md:max-h-[80vh] max-w-[70%] md:max-w-full" alt="">
      </div>
      <div class="grid md:grid-cols-2 bg-gray text-black px-(--sm) pt-(--sm) pb-(--lg) min-h-[100dvh]">
        <h2 class="text-lg max-w-[35ch] mb-4 text-balance leading-[0.98]">{{story.content.headline2}}</h2>
        <div>
          <div v-html="renderRichText(story.content.body)" class="font-regular md:col-2"></div>
          <div v-html="renderRichText(story.content.text2)" class="font-regular md:col-2"></div>
        </div>
      </div>
      <!-- <div class="flex items-center justify-center relative my-(--lg)">
        <img :src="story.content.image2.filename" class="md:max-h-[80vh]" alt="">
      </div> -->
    </div>
    <div class="mt-(--nav-height)"><InauditaMarquee><div class="inaudita-logo-wrapper"><inaudita-logo /></div></InauditaMarquee></div>
    <inaudita-footer />
  </div>
</template>

<script setup>
const storyblokApi = useStoryblokApi()
const { story } = await useAsyncStoryblok('about', {
  api: {
    version: 'draft'
  },
})



useServerSeoMeta({
  title: 'Inaudita - Nosotros'
})
</script>

<style lang="scss">
.inaudita-logo-wrapper {
  display: flex;

  svg {
    height: 110vh;
  }
}

.headline-img { 
  position: absolute;
  top: 40vh;
  left: 50%;
  height: 100vh;
  transform: translateX(-50%);
}

@media (max-width: 900px) {
  .inaudita-logo-wrapper {
    svg {
      height: 50vh;
    }
  }
}
</style>