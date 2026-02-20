<template>
  <header class="absolute top-0 left-0 right-0 z-50" style="background: transparent !important;">
    <UContainer>
      <div class="flex items-center justify-between h-20">

        <!-- Left: Logo with UChip blue dot -->
        <NuxtLink to="/" class="flex items-center">
          <UChip color="primary" size="sm">
            <span
              class="text-2xl font-extrabold tracking-tight select-none text-white"
            >
              TheWorkPlace
            </span>
          </UChip>
        </NuxtLink>

        <!-- Right: Desktop nav items -->
        <nav class="hidden md:flex items-center gap-2">
          <div v-for="item in navItems" :key="item.label" class="relative">
            <UButton
              :to="item.to"
              variant="ghost"
              size="md"
              class="font-medium transition-colors"
              :class="[
                isActive(item.to)
                  ? 'text-white font-bold'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              ]"
            >
              {{ item.label }}
            </UButton>
            <!-- Active underline indicator -->
            <span
              v-if="isActive(item.to)"
              class="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-5 rounded-full transition-all"
              style="background:white"
            />
          </div>

        </nav>

        <!-- Mobile: Hamburger toggle -->
        <div class="md:hidden">
          <UButton
            :icon="menuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'"
            variant="ghost"
            size="md"
            style="background: #5B8BF5; color: white; border-radius: 0.5rem;"
            aria-label="Toggle menu"
            @click="menuOpen = !menuOpen"
          />

        </div>

      </div>
    </UContainer>

    <!-- Mobile dropdown panel — 3/4 width, right-aligned, with dividers -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="menuOpen"
        class="md:hidden absolute left-0 right-0 top-full w-full shadow-xl overflow-hidden z-50"
        style="background: white;"
      >
        <nav>
          <NuxtLink
            v-for="(item, index) in navItems"
            :key="item.label"
            :to="item.to"
            class="flex items-center justify-between px-6 py-4 font-medium transition-colors hover:bg-gray-50"
            :class="[
              index > 0 ? 'border-t border-gray-200' : '',
              isActive(item.to) ? 'text-royal-700 font-bold border-l-4 border-l-royal-500 bg-gray-50' : 'text-gray-700'
            ]"
            @click="menuOpen = false"
          >
            <span>{{ item.label }}</span>
            <UIcon name="i-heroicons-chevron-right" class="w-4 h-4 text-gray-400" />
          </NuxtLink>
        </nav>
      </div>
    </Transition>

  </header>
</template>

<script setup lang="ts">
const scrolled = ref(false)
const menuOpen = ref(false)
const route = useRoute()

const isActive = (path: string) => route.path === path

onMounted(() => {
  const onScroll = () => { scrolled.value = window.scrollY > 40 }
  window.addEventListener('scroll', onScroll)
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})

const navItems = [
  { label: 'Home',      to: '/' },
  { label: 'About',     to: '/about' },
  { label: 'Amenities', to: '/amenities' },
  { label: 'Pricing',   to: '/pricing' },
  { label: 'Contact',   to: '/contact' }
]
</script>

<style scoped>
header {
  background-color: transparent !important;
  background: transparent !important;
}
</style>
