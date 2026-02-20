<template>
  <!-- Light royal blue tinted bg -->
  <section class="py-24" style="background: #EEF3FE;">
    <UContainer>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <!-- Left: Image -->
        <div class="relative">
          <div class="absolute -inset-4 rounded-3xl -rotate-2 opacity-40"
            style="background: linear-gradient(135deg, #B3CBFB, #D9E5FD);"></div>
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=700&h=900&fit=crop&crop=center"
            alt="Modern co-working interior"
            class="relative w-full rounded-3xl shadow-2xl object-cover aspect-[3/4]"
            loading="lazy"
          />
          <div class="absolute top-6 -right-6 rounded-2xl shadow-lg p-4 text-center min-w-[100px]"
            style="background: #2557D6; color: white;">
            <div class="text-3xl font-extrabold">5★</div>
            <div class="text-xs mt-1 opacity-90">Rated by members</div>
          </div>
        </div>

        <!-- Right: Text block -->
        <div class="space-y-8">
          <div>
            <UBadge color="primary" variant="soft" class="mb-4 px-4 py-1.5 text-sm font-semibold rounded-full">
              Our Story
            </UBadge>
            <h2 class="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight" style="color:#0F2579">
              Built For Modern<br />
              <span style="color:#2557D6">Professionals</span>
            </h2>
          </div>

          <p class="text-lg text-gray-600 leading-relaxed">
            Our co-working spaces are designed to help freelancers, startups, and teams focus, collaborate, and succeed in a comfortable environment.
          </p>

          <div class="space-y-4">
            <div
              v-for="point in keyPoints"
              :key="point.title"
              class="flex items-start gap-4 p-4 bg-white rounded-2xl border shadow-sm"
              style="border-color: #D9E5FD;"
            >
              <div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style="background: #EEF3FE;">
                <UIcon :name="point.icon" class="w-5 h-5" style="color:#2557D6" />
              </div>
              <div>
                <div class="font-semibold text-sm" style="color:#0F2579">{{ point.title }}</div>
                <div class="text-xs text-gray-500 mt-0.5">{{ point.desc }}</div>
              </div>
            </div>
          </div>

          <UButton to="/about" size="lg" color="primary" variant="soft" class="font-semibold">
            Learn More About Us
            <template #trailing>
              <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
            </template>
          </UButton>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const keyPoints = [
  { title: 'Flexible memberships', desc: 'Daily passes to long-term dedicated desks', icon: 'i-heroicons-adjustments-horizontal' },
  { title: 'Vibrant community',    desc: 'Network with professionals across industries', icon: 'i-heroicons-user-group' },
  { title: 'Prime locations',      desc: 'Central spots with great transport links', icon: 'i-heroicons-map-pin' }
]
</script>
