<template>
  <section class="py-24 bg-white">
    <UContainer>
      <div class="text-center mb-16">
        <UBadge variant="soft" color="primary" class="mb-4 px-4 py-1.5 text-sm font-semibold rounded-full">
          Why Choose Us
        </UBadge>
        <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight" style="color:#0F2579">
          Everything You Need
        </h2>
        <p class="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
          Built around your workflow, designed to make you excel every day.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <UCard
          v-for="feature in features"
          :key="feature.title"
          class="group text-center p-8 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border cursor-default"
          style="border-color: #D9E5FD;"
          :ui="{ body: { padding: '' } }"
        >
          <div class="mb-6 flex justify-center">
            <div
              class="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
              style="background: #EEF3FE;"
            >
              <UIcon :name="feature.icon" class="w-8 h-8" style="color: #2557D6;" />
            </div>
          </div>
          <h3 class="text-lg font-bold mb-2" style="color: #0F2579;">{{ feature.title }}</h3>
          <p class="text-sm text-gray-500">{{ feature.description }}</p>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const features = [
  { title: 'High-Speed Internet', description: 'Fast & reliable',    icon: 'i-heroicons-wifi' },
  { title: '24/7 Access',         description: 'Work anytime',       icon: 'i-heroicons-clock' },
  { title: 'Meeting Rooms',       description: 'Fully equipped',     icon: 'i-heroicons-users' },
  { title: 'Creative Environment',description: 'Inspiring space',    icon: 'i-heroicons-light-bulb' }
]
</script>
