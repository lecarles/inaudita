<template>
  <div class="still-gallery">
    <div class="stills-grid">
      <div 
        v-for="(still, i) in stillsArray" 
        :key="i"
        class="still-item"
        :class="{ 'active': selectedStill === i }"
        @click="selectStill(i)"
        :style="{ backgroundImage: `url(${still.filename}/m/800x0)` }"
      >
      </div>
    </div>

    <!-- Fullscreen overlay -->
    <div 
      v-if="selectedStill !== null" 
      class="fullscreen-overlay"
      @click="closeFullscreen"
    >
      <div class="fullscreen-container">
        <div 
          class="fullscreen-still"
          :style="{ backgroundImage: `url(${stillsArray[selectedStill].filename}/m/1920x0)` }"
        >
          <button class="close-btn text-regular text-lg" @click="closeFullscreen">×</button>
          <button class="nav-btn prev" @click.stop="previousStill" v-if="stillsArray.length > 1">←</button>
          <button class="nav-btn next" @click.stop="nextStill" v-if="stillsArray.length > 1">→</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const selectedStill = ref(null);

const props = defineProps({
  stillsArray: {
    type: Array,
    required: true,
    default: () => []
  }
})

const selectStill = (index) => {
  selectedStill.value = index
  document.body.style.overflow = 'hidden' // Prevent background scrolling
}

const closeFullscreen = () => {
  selectedStill.value = null;
  document.body.style.overflow = '' // Restore scrolling
}

const nextStill = () => {
  if (selectedStill.value < props.stillsArray.length - 1) {
    selectedStill.value++
  } else {
    selectedStill.value = 0 // Loop to first
  }
}

const previousStill = () => {
  if (selectedStill.value > 0) {
    selectedStill.value--
  } else {
    selectedStill.value = props.stillsArray.length - 1; // Loop to last
  }
}

// Keyboard navigation
const handleKeydown = (e) => {
  if (selectedStill.value === null) return;
  
  switch (e.key) {
    case 'Escape':
      closeFullscreen();
      break;
    case 'ArrowRight':
      nextStill();
      break;
    case 'ArrowLeft':
      previousStill();
      break;
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown);
  document.body.style.overflow = ''; // Cleanup
});
</script>

<style lang="scss" scoped>
.still-gallery {
  padding: var(--lg) 0;
  width: 100%;
  min-height: 100dvh;
  margin: auto;
}

.stills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--sm);
  padding: var(--sm);

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: var(--md);
    padding: var(--md);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.still-item {
  aspect-ratio: 16/9;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    transform: scale(1.02);
  }
}

.fullscreen-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s ease;
}

.fullscreen-container {
  width: 95vw;
  height: 95vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fullscreen-still {
  width: 100%;
  height: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  border-radius: 8px;
}

.close-btn {
  position: absolute;
  top: var(--sm);
  right: var(--sm);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
  z-index: 10;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;

  &.prev {
    left: var(--md);

    &:hover {
      transform: translateY(-50%) translateX(-6%);
    }
  }

  &.next {
    right: var(--md);
    
    &:hover {
      transform: translateY(-50%) translateX(6%);
    }
  }
}

.still-counter {
  position: absolute;
  bottom: var(--sm);
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: var(--xs) var(--sm);
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: bold;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

// Mobile specific styles
@media (max-width: 768px) {
  .stills-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: var(--xs);
    padding: var(--xs);
  }

  .nav-btn {
    width: 40px;
    height: 40px;
    font-size: 20px;

    &.prev {
      left: var(--sm);
    }

    &.next {
      right: var(--sm);
    }
  }

  .close-btn {
    width: 35px;
    height: 35px;
    font-size: 20px;
  }
}
</style>