<template>
  <section class="py-24 bg-white">
    <UContainer>
      <div class="text-center mb-16">
        <UBadge color="primary" variant="soft" class="mb-4 px-4 py-1.5 text-sm font-semibold rounded-full">
          What We Offer
        </UBadge>
        <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight" style="color:#0F2579">
          World-Class Amenities
        </h2>
        <p class="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
          Every detail designed to elevate your work experience.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <UCard
          v-for="amenity in amenities"
          :key="amenity.title"
          class="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border"
          style="border-color: #D9E5FD;"
          :ui="{ body: { padding: '' } }"
        >
          <div class="relative overflow-hidden">
            <img
              :src="amenity.image"
              :alt="amenity.title"
              class="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div class="absolute inset-0"
              style="background: linear-gradient(to top, rgba(15,37,121,0.4), transparent)"></div>
          </div>
          <div class="p-5 flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
              style="background: #EEF3FE;">
              <UIcon :name="amenity.icon" class="w-5 h-5" style="color:#2557D6" />
            </div>
            <h3 class="font-bold" style="color:#0F2579">{{ amenity.title }}</h3>
          </div>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const amenities = [
  { title: 'Comfortable Seating',  icon: 'i-heroicons-home',                      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop&crop=center' },
  { title: 'Private Offices',      icon: 'i-heroicons-lock-closed',               image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&crop=center' },
  { title: 'Free Coffee',          icon: 'i-heroicons-beaker',                    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop&crop=center' },
  { title: 'High-Speed Wi-Fi',     icon: 'i-heroicons-wifi',                      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&crop=center' },
  { title: 'Conference Rooms',     icon: 'i-heroicons-presentation-chart-line',   image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop&crop=center' },
  { title: 'Community Events',     icon: 'i-heroicons-calendar-days',             image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop&crop=center' }
]
</script>
