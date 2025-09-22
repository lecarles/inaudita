<template>
  <div class="inaudita-film">
    <div class="film-video uppercase text-white">
      <div class="film-video-container">
        <video :src="`/video/${movie.data.story.content.video}`" autoplay loop playsinline muted v-if="movie.data.story.content.video"></video>
        <img :src="movie.data.story.content.stills[0].filename" alt="" v-else-if="movie.data.story.content.stills[0]">
      </div>
      <div class="text-balance text-left text-xl leading-[0.9] z-10">{{ movie.data.story.content.title }}</div>
      <div class="flex mt-(--sm) md:mt-0 md:block text-right text-md md:text-xl leading-[0.9] z-10">
        <div  v-if="movie.data.story.content.releaseDate" class="mr-auto">{{ movie.data.story.content.releaseDate.slice(0, 4)}}</div>
        <div v-if="movie.data.story.content.duration">{{ movie.data.story.content.duration }}’</div>
      </div>
    </div>
    <div class="film-info text-white px-(--sm) pt-(--md) mt-(--sm)">
      <div class="film-info-primary">
        <div class="film-info-description text-md leading-[1.1]">
          {{ movie.data.story.content.summary }}
        </div>
        <div class="film-info-links text-md uppercase" v-html="renderRichText(movie.data.story.content.links)">
        </div>
      </div>
      <div class="film-info-credits mt-(--md)">
        <div v-if="movie.data.story.content.creditsPrimary" class="film-credits-primary" v-html="renderRichText(movie.data.story.content.creditsPrimary)"></div>
        <div v-if="movie.data.story.content.creditsSecondary" class="film-credits-secondary py-(--sm) mt-(--2xl)" v-html="renderRichText(movie.data.story.content.creditsSecondary)"></div>
        <div v-if="movie.data.story.content.cast" class="film-credits-cast py-(--sm) my-(--xl)">
          <div class="uppercase text-base w-full">Reparto</div>
          <div class="film-credits-cast-names" v-html="renderRichText(movie.data.story.content.cast)"></div>
        </div>
      </div>
      <div class="film-info-awards-wrapper" v-if="movie.data.story.content.awards[0]">
        <div class="uppercase text-base w-full">Premios</div>
        <div class="film-info-awards mt-(--lg)" v-if="movie.data.story.content.awards[0]">
          <img v-for="award in movie.data.story.content.awards" :src="award.filename" :alt="award.title" :key="award._uid" />
        </div>
      </div>
      <div class="film-info-gallery mt-(--md)">
        <still-gallery :stillsArray="movie.data.story.content.stills" v-if="movie.data.story.content.stills"/>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  movie: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss">
.inaudita-film {
  padding: 0 var(--sm);
  margin-top: var(--nav-height);

  .film-video {
    position: relative;
    background: var(--color-black);
    width: 100%;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: auto;
    align-items: end;
    padding: var(--sm);
    height: calc(100dvh - var(--nav-height) - var(--sm));

    &-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;

      video, img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .film-info {
    background: var(--color-black);

    &-primary {
      display: grid;
      grid-template-columns: 3fr 1fr;
    }

    &-awards {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
      margin: 0 auto;
      align-items: center;
      justify-items: center;
      column-gap: 3em;
      row-gap: 1.5em;

      &-wrapper {
        min-height: calc(100svh - var(--nav-height) - var(--sm));
        border-top: 1px solid var(--color-white);
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr;
        align-items: center;
        justify-items: center;
      }

      img {
        height: 6vw;
        width: 8vw;
        max-height: 200px;
        max-width: 300px;
        object-fit: contain;
      }
    }
  }

  .film-credits-primary {
    p {
      margin-bottom: var(--sm);
    }
  }
 
  .film-credits-secondary, .film-credits-cast {
    border-top: 1px solid var(--color-white);
  } 

  .film-credits-secondary, .film-credits-cast-names {
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
      align-content: end;
    }

    .film-credits-secondary, .film-credits-cast {
      column-count: 1;
    }

    .film-info {
      &-primary {
        grid-template-columns: 1fr;
      }

      &-awards {
        img {
          height: 100%;
          width: 25%;
        }
      }
    }
  }
}
</style>