<template>
  <div class="inaudita-film">
    <div class="film-video uppercase text-white">
      <div class="film-video-container">
        <video :src="`/video/${movie.data.story.content.video}`" autoplay loop playsinline muted v-if="movie.data.story.content.video"></video>
        <img :src="movie.data.story.content.coverImage.filename" alt="" v-else-if="movie.data.story.content.coverImage">
        <img :src="movie.data.story.content.stills[0].filename" alt="" v-else-if="movie.data.story.content.stills[0]">
      </div>
      <div class="text-balance text-left text-xl leading-[0.9] z-10">{{ movie.data.story.content.title }}</div>
      <div class="flex mt-(--sm) md:mt-0 md:block text-right text-md md:text-xl leading-[0.9] z-10">
        <div  v-if="movie.data.story.content.releaseDate" class="mr-auto">{{ movie.data.story.content.releaseDate.slice(0, 4)}}</div>
        <div v-if="movie.data.story.content.duration">{{ movie.data.story.content.duration }}’</div>
      </div>
    </div>
    <div class="film-info text-white px-(--md) pt-(--md) mt-(--sm)">
      <div class="grid md:grid-cols-2 gap-(--md)">
        <div>
          <div class="film-info-description text-base font-regular leading-[1.1]">
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
            <div class="text-base w-full font-regular">Premios</div>
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
    min-height: 100dvh;

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
        border: 1px solid var(--color-white);
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

      &-wrapper {
        border-top: 1px solid var(--color-white);
        display: grid;
      }

      img {
        height: 4vw;
        width: 7vw;
        max-height: 200px;
        max-width: 350px;
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
    p {
      margin-bottom: var(--sm);
    }
  }

  .film-credits-primary, .film-credits-secondary, .film-credits-cast {
    p span {
      color: var(--color-white) !important;
    }

    p {
      font-family: var(--font-sans);
      display: flex;
      gap: .65em;
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