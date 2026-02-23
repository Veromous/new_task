<template>
  <div style="background: #F5F6FA;">
    <!-- Page Hero -->
    <AboutHero />
    <Below />
    <TeamSection />
    <ImpactSection />
    < />
  </div>
</template>

<script setup lang="ts">

import type { ButtonProps } from '@nuxt/ui'

const links = ref<ButtonProps[]>([
  {
    label: 'Get started',
    color: 'neutral'
  },
  {
    label: 'Learn more',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right'
  }
])

useSeoMeta({
  title: 'About Us — TheWorkPlace',
  description: 'Learn more about TheWorkPlace – our mission, values, and the community behind a better way to work.',
  ogTitle: 'About Us — TheWorkPlace',
  ogDescription: 'Learn more about TheWorkPlace – our mission, values, and the community behind a better way to work.'
})
</script>

<style scoped>
.page-hero {
  padding: 6rem 0 4rem;
  background: linear-gradient(135deg, #163499 0%, #0F2579 100%);
  text-align: center;
}

.page-hero-title {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 1.25rem;
}

.page-hero-desc {
  font-size: 1rem;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .page-hero {
    padding: 8rem 0 5rem;
  }
  .page-hero-title {
    font-size: 3.25rem;
  }
  .page-hero-desc {
    font-size: 1.0625rem;
  }
}
</style>
