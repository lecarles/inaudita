<template>
  <div class="about-page relative">
    <div class="mt-(--nav-height)">
      <div class="about-header grid md:grid-cols-2 md:max-h-(--content-height)">
        <img :src="story.content.image.filename" alt="" class="max-h-[50vh] md:max-h-(--content-height)" />
        <div class="px-(--md) text-foreground mt-(--md) md:col-2 md:m-auto pb-(--md)">
          <h2 class="text-xl md:max-w-[35ch] mb-4 md:text-balance leading-[0.98]">{{story.content.headline}}</h2>
          <div class="mt-(--md) text-base font-regular" v-html="renderRichText(story.content.body)"></div>
          <div class="mt-(--sm) text-sm font-regular" v-html="renderRichText(story.content.text2)"></div>
        </div>
      </div>
      <div class="py-(--xl) w-full flex flex-col">
        <h2 class="text-md mx-auto text-balance leading-[0.98]">{{story.content.headline2}}</h2>
        <div class="about-logos px-(--sm) md:px-(--xl)" v-if="story.content.logos[0]">
          <img v-for="logo in story.content.logos" :src="logo.filename" :alt="logo.title" :key="logo._uid" />
        </div>
      </div>
    </div>
    <div class="mt-(--nav-height) mb-(--footer-height)"><InauditaMarquee><div class="inaudita-logo-wrapper"><inaudita-logo /></div></InauditaMarquee></div>
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

.about-header {
  min-height: calc(100dvh - var(--nav-height) - var(--footer-height));
  width: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.about-logos {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  column-gap: 3em;
  row-gap: 1.5em;
  padding-top: var(--lg);
  height: fit-content;
  align-items: center;
  justify-items: center;
  justify-content: center;
  row-gap: var(--md);
  column-gap: var(--md);

  img {
    min-width: 90px;
    height: 4em;
    width: 18em;
    object-fit: contain;
  }
}

@media (max-width: 900px) {
  .inaudita-logo-wrapper {
    svg {
      height: 50vh;
    }
  }

  .about-logos img {
    max-height: 40px;
    max-width: 200px;
  }
}
</style>