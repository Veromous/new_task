<template>
  <!-- Mid royal blue background for pricing -->
  <section class="py-24 relative overflow-hidden" style="background: linear-gradient(135deg, #163499 0%, #0F2579 100%);">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-10"
        style="background: radial-gradient(circle, #5B8BF5, transparent)"></div>
    </div>

    <UContainer class="relative z-10">
      <div class="text-center mb-16">
        <UBadge variant="soft" class="mb-4 px-4 py-1.5 text-sm font-semibold rounded-full"
          style="background: rgba(91,139,245,0.2); color: #B3CBFB;">
          Simple Pricing
        </UBadge>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Choose Your Plan
        </h2>
        <p class="mt-4 text-lg max-w-xl mx-auto" style="color:#7FABF8">
          Transparent pricing with no hidden fees. Scale up or down anytime.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <!-- Plan 1: Daily Pass -->
        <UCard class="p-8 rounded-3xl border" style="background: rgba(255,255,255,0.06); border-color: rgba(91,139,245,0.3);" :ui="{ body: { padding: '' } }">
          <div class="text-sm font-semibold uppercase tracking-widest mb-4" style="color:#7FABF8">Daily Pass</div>
          <div class="flex items-end gap-1 mb-2">
            <span class="text-5xl font-extrabold text-white">$10</span>
            <span class="mb-2 text-sm" style="color:#7FABF8">/ Day</span>
          </div>
          <UDivider class="my-6" style="border-color: rgba(91,139,245,0.3)" />
          <ul class="space-y-4 mb-8">
            <li v-for="f in dailyPassFeatures" :key="f" class="flex items-center gap-3">
              <UIcon name="i-heroicons-check-circle" class="w-5 h-5 shrink-0" style="color:#5B8BF5" />
              <span class="text-sm" style="color:#B3CBFB">{{ f }}</span>
            </li>
          </ul>
          <UButton block size="lg" variant="outline" class="font-semibold rounded-xl"
            style="border-color: rgba(91,139,245,0.5); color: white;">
            Choose Plan
          </UButton>
        </UCard>

        <!-- Plan 2: Monthly (Highlighted - light royal blue) -->
        <UCard class="p-8 rounded-3xl shadow-2xl scale-105 border-0" style="background: #5B8BF5;" :ui="{ body: { padding: '' } }">
          <div class="absolute -top-5 left-1/2 -translate-x-1/2">
            <UBadge color="white" class="px-4 py-1.5 text-xs font-bold shadow-lg rounded-full" style="color:#0F2579">
              ✦ MOST POPULAR
            </UBadge>
          </div>
          <div class="text-sm font-semibold uppercase tracking-widest mb-4 text-white/80">Monthly Membership</div>
          <div class="flex items-end gap-1 mb-2">
            <span class="text-5xl font-extrabold text-white">$150</span>
            <span class="mb-2 text-sm text-white/70">/ Month</span>
          </div>
          <UDivider class="my-6" style="border-color: rgba(255,255,255,0.3)" />
          <ul class="space-y-4 mb-8">
            <li v-for="f in monthlyFeatures" :key="f" class="flex items-center gap-3">
              <UIcon name="i-heroicons-check-circle" class="w-5 h-5 shrink-0 text-white" />
              <span class="text-sm text-white/90">{{ f }}</span>
            </li>
          </ul>
          <UButton block size="lg" class="font-bold rounded-xl" style="background: white; color: #2557D6;">
            Choose Plan
          </UButton>
        </UCard>

        <!-- Plan 3: Private Office -->
        <UCard class="p-8 rounded-3xl border" style="background: rgba(255,255,255,0.06); border-color: rgba(91,139,245,0.3);" :ui="{ body: { padding: '' } }">
          <div class="text-sm font-semibold uppercase tracking-widest mb-4" style="color:#7FABF8">Private Office</div>
          <div class="flex items-end gap-1 mb-2">
            <span class="text-5xl font-extrabold text-white">$300</span>
            <span class="mb-2 text-sm" style="color:#7FABF8">/ Month</span>
          </div>
          <UDivider class="my-6" style="border-color: rgba(91,139,245,0.3)" />
          <ul class="space-y-4 mb-8">
            <li v-for="f in privateOfficeFeatures" :key="f" class="flex items-center gap-3">
              <UIcon name="i-heroicons-check-circle" class="w-5 h-5 shrink-0" style="color:#5B8BF5" />
              <span class="text-sm" style="color:#B3CBFB">{{ f }}</span>
            </li>
          </ul>
          <UButton block size="lg" variant="outline" class="font-semibold rounded-xl"
            style="border-color: rgba(91,139,245,0.5); color: white;">
            Choose Plan
          </UButton>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const dailyPassFeatures = ['Open seating', 'Wi-Fi access']
const monthlyFeatures = ['Dedicated desk', '24/7 access', 'Meeting rooms']
const privateOfficeFeatures = ['Private space', 'All amenities']
</script>
