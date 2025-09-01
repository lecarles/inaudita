<template>
  <div class="inaudita-film">
    <div class="film-video uppercase text-white">
      <div class="text-center md:text-left text-xl leading-[0.9]">{{ movie.data.story.content.title }}</div>
      <div class="text-right md:text-md text-xl leading-[0.9]">
        <div>2024</div>
        <div>{{ movie.data.story.content.duration }}</div>
      </div>
    </div>
    <div class="film-info text-white px-(--sm) py-(--lg)">
      <div class="film-info-primary">
        <div class="film-info-description text-md leading-[1.1]">
          {{ movie.data.story.content.summary }}
        </div>
        <div class="film-info-links text-md uppercase" v-html="renderRichText(movie.data.story.content.links)">
        </div>
      </div>
      <div class="film-info-credits mt-(--md)">
        <div class="film-credits-primary" v-html="renderRichText(movie.data.story.content.creditsPrimary)"></div>
        <div class="film-credits-secondary py-(--sm) mt-(--2xl)" v-html="renderRichText(movie.data.story.content.creditsSecondary)"></div>
        <div class="film-credits-cast py-(--sm) mt-(--xl)" v-html="renderRichText(movie.data.story.content.cast)"></div>
      </div>
      <div class="film-info-awards mt-(--2xl)">
        premios
      </div>
      <div class="film-info-gallery mt-(--md)">
        <still-gallery />
      </div>
    </div>
  </div>
  <inaudita-footer />
</template>

<script setup>
const { slug } = useRoute().params

const storyblokApi = useStoryblokApi()
const movie = await storyblokApi.get('cdn/stories/films/' + slug)

useServerSeoMeta({
  title: () => 'Inaudita - ' + movie.data.story.content.title,
})
</script>

<style lang="scss">
.inaudita-film {
  padding: 0 var(--sm);
  margin-top: var(--nav-height);

  .film-video {
    position: relative;
    background: darkgray;
    width: 100%;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: auto;
    align-items: end;
    padding: var(--sm);
    height: calc(100dvh - var(--nav-height) - var(--sm));
  }

  .film-info {
    background: var(--color-black);

    &-primary {
      display: grid;
      grid-template-columns: 3fr 1fr;
    }

    &-awards {
      min-height: 100dvh;
      display: flex;
      align-items: center;
      justify-content: center;
      border-top: 1px solid var(--color-white);
    }
  }

  .film-credits-primary {
    p {
      margin-bottom: var(--sm);
    }
  }

  .film-credits-secondary, .film-credits-cast {
    border-top: 1px solid var(--color-white);
    column-count: 3;

    p {
      margin-bottom: var(--sm);
      -webkit-column-break-inside: avoid;
      page-break-inside: avoid;
      break-inside: avoid-column;
    }
  }

  .film-credits-primary, .film-credits-secondary, .film-credits-cast {
    p span {
      color: var(--color-white) !important;
    }

    p {
      font-size: var(--text-md);
    }

    strong {
      font-size: var(--text-base);
      text-transform: uppercase;
    }
  }
}

@media (max-width: 1000px) {
  .inaudita-film {
    .film-video {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
    }

    .film-credits-secondary, .film-credits-cast {
      column-count: 1;
    }

    .film-info {
      &-primary {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>