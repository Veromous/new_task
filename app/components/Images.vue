<template>
  <UContainer class="pb-10">
    <!-- Big Screen: 2 up, 3 down | Small Screen: 1 each -->
    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-4">
      <!-- Top 2 Big Images -->
      <div
        v-for="image in topImages"
        :key="image.id"
        class="relative overflow-hidden rounded-xl"
      >
        <img
          :src="image.src"
          :alt="image.alt"
          class="w-full h-64 lg:h-80 object-cover"
        />
        <div class="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all" />
        <div class="absolute bottom-4 left-4">
          <UBadge :label="image.label" color="white" variant="solid" />
        </div>
      </div>
    </div>

    <!-- Bottom 3 Images -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div
        v-for="image in bottomImages"
        :key="image.id"
        class="relative overflow-hidden rounded-xl"
      >
        <img
          :src="image.src"
          :alt="image.alt"
          class="w-full h-48 lg:h-56 object-cover"
        />
        <div class="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all" />
        <div class="absolute bottom-4 left-4">
          <UBadge :label="image.label" color="white" variant="solid" />
        </div>
      </div>
    </div>
  </UContainer>
</template>

<script setup>
const topImages = [
  {
    id: 1,
    src: 'https://picsum.photos/800/600?random=1',
    alt: 'Image One',
    label: 'Featured'
  },
  {
    id: 2,
    src: 'https://picsum.photos/800/600?random=2',
    alt: 'Image Two',
    label: 'Popular'
  }
]

const bottomImages = [
  {
    id: 3,
    src: 'https://picsum.photos/800/600?random=3',
    alt: 'Image Three',
    label: 'New'
  },
  {
    id: 4,
    src: 'https://picsum.photos/800/600?random=4',
    alt: 'Image Four',
    label: 'Trending'
  },
  {
    id: 5,
    src: 'https://picsum.photos/800/600?random=5',
    alt: 'Image Five',
    label: 'Editor Pick'
  }
]
</script>


