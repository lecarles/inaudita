<template>
  <div class="inaudita-film">
    <div class="film-video text-white pb-30 px-8">
      <div class="film-video-container">
        <video :src="`/video/${movie.data.story.content.video}`" autoplay loop playsinline muted v-if="movie.data.story.content.video"></video>
        <img :src="movie.data.story.content.coverImage.filename" alt="" v-else-if="movie.data.story.content.coverImage">
        <img :src="movie.data.story.content.stills[0].filename" alt="" v-else="movie.data.story.content.stills[0].filename">
      </div>
      <div class="text-balance text-left text-2xl leading-[0.9] z-10">{{ movie.data.story.content.title }}</div>
      <div class="flex gap-(--sm) uppercase z-10 text-sm mt-(--md)">
        <div class="text-left">({{movie.data.story.content.releaseDate.slice(0, 4)}})</div>
        <div>{{movie.data.story.content.shortText}}</div>
        <div class="text-right">({{movie.data.story.content.duration}}’)</div>
      </div>
    </div>
    <div class="film-info">
      <div class="grid md:grid-cols-2 gap-(--lg) bg-gray text-black pt-(--md) pb-(--xl) px-(--sm) md:px-(--lg)">
        <div class="md:px-(--sm) md:pl-(--sm) md:pr-(--md)">
          <div class="film-info-description text-md font-regular leading-[1.1]">
            {{ movie.data.story.content.summary }}
          </div>
          <div class="film-info-links text-md uppercase" v-html="renderRichText(movie.data.story.content.links)">
          </div>
        </div>
        <div class="film-info-credits text-base font-regular">
          <div v-if="movie.data.story.content.creditsPrimary.content.length > 1" class="film-credits-primary" v-html="renderRichText(movie.data.story.content.creditsPrimary)"></div>
          <div v-if="movie.data.story.content.creditsSecondary.content.length > 1" class="film-credits-secondary py-(--sm) mt-(--md)" v-html="renderRichText(movie.data.story.content.creditsSecondary)"></div>
          <div v-if="movie.data.story.content.cast.content.length > 1" class="film-credits-cast py-(--sm) mt-(--md)">
            <div class="text-base w-full mb-(--sm)">Reparto</div>
            <div class="film-credits-cast-names flex gap-(--sm)" v-html="renderRichText(movie.data.story.content.cast)"></div>
          </div>
          <div class="film-info-awards-wrapper mt-(--md)" v-if="movie.data.story.content.awards[0]">
            <div class="text-base w-full font-regular pt-(--sm)"></div>
            <div class="film-info-awards" v-if="movie.data.story.content.awards[0]">
              <img v-for="award in movie.data.story.content.awards" :src="award.filename" :alt="award.title" :key="award._uid" />
            </div>
          </div>
        </div>
      </div>
      <div class="film-info-gallery mt-(--md)" v-if="movie.data.story.content.stills.length > 1">
        <still-gallery :stillsArray="movie.data.story.content.stills"/>
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
  padding: 0;
  margin-top: var(--nav-height);

  .film-video {
    position: relative;
    background: var(--color-black);
    width: 100%;
    height: calc(100dvh - var(--nav-height) - var(--footer-height));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

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
    min-height: 50dvh;

    &-primary {
      display: grid;
      grid-template-columns: 3fr 1fr;
    }

    &-links {
      display: flex;
      gap: var(--sm);
      margin-top: var(--md);
      flex-wrap: wrap;

      a {
        border: 1px solid var(--color-black);
        padding: var(--xs) var(--sm);
      }
    }

    &-awards {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      margin: 0 auto;
      column-gap: 3em;
      row-gap: 1.5em;
      padding-top: var(--sm);
      height: fit-content;
      align-items: center;

      &-wrapper {
        border-top: 1px solid var(--color-black);
        display: grid;
      }

      img {
        height: 4vw;
        width: 9vw;
        min-width: 120px;
        max-height: 200px;
        max-width: 350px;
        object-fit: contain;
        filter: grayscale(1) invert(1);
      }
    }
  }

  .film-credits-primary {
    p {
      margin-bottom: var(--sm);
    }
  }
 
  .film-credits-secondary, .film-credits-cast {
    border-top: 1px solid var(--color-black);
  } 

  .film-credits-secondary, .film-credits-cast-names {
    p {
      margin-bottom: var(--sm);
    }
  }

  .film-credits-cast {
    p span {
      color: var(--color-black) !important;
    }

    p {
      display: flex;
      gap: var(--sm);
      font-family: var(--font-sans);
    }
  }

  .film-credits-primary, .film-credits-secondary {
    p span {
      color: var(--color-black) !important;
    }

    p {
      font-family: var(--font-sans);
      display: grid;
      gap: .5em;
      padding-left: calc(15ch + .5em);

      &:has(*:not(:empty)) {
        grid-template-columns: 15ch 1fr;
        padding-left: 0;
      }

      br {
        display: none;
      }
    }

    strong {
      font-family: var(--font-regular);
      font-size: var(--text-base);
      font-weight: 500;
      text-transform: lowercase;

      &::first-letter {
        text-transform: uppercase;
      }
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