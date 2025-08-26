<template>
  <div class="still-gallery">
    <div class="main-gallery">
      <div 
        ref="stillsContainer" 
        class="stills-container"
      >
        <div 
          ref="stills"
          class="still" 
          v-for="(still, i) in stillImages" 
          :key="i"
          :style="{ backgroundImage: `url(${still.image})` }"
        >
        </div>
      </div>
    </div>
    
    <div class="still-gallery-controls">
      <div 
        class="still-thumbnail"
        v-for="(still, i) in stillImages"
        :key="`thumb-${i}`"
        :class="{ active: currentIndex === i }"
        @click="goToSlide(i)"
        :style="{ backgroundImage: `url(${still.thumbnail})` }"
      >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import horizontalLoop from '~/helpers/horizontalLoop.js';

const stills = ref(null)
const stillsContainer = ref(null)
const currentIndex = ref(0)
let loopTimeline = null

// Sample still images - replace with your actual images
const stillImages = ref([
  {
    image: 'https://picsum.photos/1920/1080?random=1',
    thumbnail: 'https://picsum.photos/200/120?random=1'
  },
  {
    image: 'https://picsum.photos/1920/1080?random=2',
    thumbnail: 'https://picsum.photos/200/120?random=2'
  },
  {
    image: 'https://picsum.photos/1920/1080?random=3',
    thumbnail: 'https://picsum.photos/200/120?random=3'
  },
  {
    image: 'https://picsum.photos/1920/1080?random=4',
    thumbnail: 'https://picsum.photos/200/120?random=4'
  },
  {
    image: 'https://picsum.photos/1920/1080?random=5',
    thumbnail: 'https://picsum.photos/200/120?random=5'
  },
  {
    image: 'https://picsum.photos/1920/1080?random=6',
    thumbnail: 'https://picsum.photos/200/120?random=6'
  },
  {
    image: 'https://picsum.photos/1920/1080?random=7',
    thumbnail: 'https://picsum.photos/200/120?random=7'
  },
  {
    image: 'https://picsum.photos/1920/1080?random=8',
    thumbnail: 'https://picsum.photos/200/120?random=8'
  },
  {
    image: 'https://picsum.photos/1920/1080?random=9',
    thumbnail: 'https://picsum.photos/200/120?random=9'
  },
  {
    image: 'https://picsum.photos/1920/1080?random=10',
    thumbnail: 'https://picsum.photos/200/120?random=10'
  }
]);

const goToSlide = (index) => {
  if (loopTimeline) {
    loopTimeline.toIndex(index, { duration: 0.8, ease: "power2.out" });
  }
};

onMounted(() => {
  if (stills.value && stills.value.length) {
    loopTimeline = horizontalLoop(stills.value, {
      center: true,
      paused: true,
      onChange: (element, index) => {
        currentIndex.value = index;
      }
    });
  }
});

onBeforeUnmount(() => {
  if (loopTimeline) {
    loopTimeline.kill();
  }
});
</script>

<style lang="scss" scoped>
.still-gallery {
  display: flex;
  flex-direction: column;
  height: calc(100dvh - var(--nav-height) - var(--sm));
}

.main-gallery {
  flex: 1;
  overflow: hidden;
  position: relative;
}

.stills-container {
  display: flex;
  height: 100%;
  width: 100%;
}

.still {
  flex-shrink: 0;
  width: 100vw;
  height: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.still-gallery-controls {
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
  justify-content: center;
  background: rgba(0, 0, 0, 0.1);
  overflow-x: auto;
}

.still-thumbnail {
  flex-shrink: 0;
  width: clamp(80px, 4vw, 140px);
  height: auto;
  aspect-ratio: 16/9;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid transparent;
  cursor: pointer;
  position: relative;
  transition: all 0.1s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    border-color: var(--color-white);
  }
  
  &.active {
    border-color: var(--color-white);
  }
}

// Mobile responsive adjustments
@media (max-width: 768px) {
  .still {
    .still-number {
      top: 1rem;
      left: 1rem;
      padding: 0.3rem 0.6rem;
      font-size: 1rem;
    }
  }
  
  .still-gallery-controls {
    padding: 0.5rem;
    gap: 0.3rem;
  }
  
  .still-thumbnail {
    width: 60px;
    height: 36px;
    
    span {
      font-size: 0.6rem;
      padding: 0.1rem 0.3rem;
    }
  }
}
</style>