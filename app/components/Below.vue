<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const links = ref<ButtonProps[]>([
  {
    label: 'Get started',
    color: 'info',
    trailingIcon: 'i-lucide-arrow-right',
    size: "lg"
  }
])
</script>

<template>
  <UPageCTA
    title="About Our Co-working Place"
    description="A descriptive paragraph that tells clients how good you are and proves that you are the best choice that they've made. This paragraph is also for those who are looking out for a reliable co-working space. You can use a few enticing words and flaunt your capabilities that will attract future clients and encourage them to hire you right away. List down your expertise and experience to prove you are the best."
    orientation="horizontal"
    :links="links"
    class="bg-white border-0 outline-0 ring-0"
    :ui="{
        title:'text-gray-900',
        description:'text-gray-600 text-xs'
    }"
    style="--primary-color: #004fd1; --primary-foreground: white;"
  >
    <img
      src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop"
      width="320"
      height="364"
      alt="Co-working Space"
      class="w-full rounded-lg border-0"
      style="background: white;"
    />
  </UPageCTA>
</template>
