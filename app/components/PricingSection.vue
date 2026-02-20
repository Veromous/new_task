<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Choose Your Perfect Workspace
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Our flexible pricing options make it easy for individuals, teams, and startups to find the perfect workspace without stretching your budget.
        </p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <!-- Membership Plan -->
        <div class="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <div class="p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Membership</h3>
            <div class="text-4xl font-bold text-primary-600 mb-6">
              $29<span class="text-lg text-gray-500">/mo</span>
            </div>
            <p class="text-gray-600 mb-8">
              Grab any desk in the common area — 1 day/mo included. Bring your device, pick a seat, and get to work.
            </p>
            
            <ul class="space-y-4 mb-8">
              <li v-for="feature in membershipFeatures" :key="feature" class="flex items-start">
                <Icon name="i-heroicons-check-circle" class="text-green-500 mt-1 mr-3 shrink-0" />
                <span class="text-gray-700">{{ feature }}</span>
              </li>
            </ul>
            
            <UButton 
              size="lg" 
              block 
              variant="outline"
              class="hover:bg-primary-50 hover:border-primary-500 transition-colors"
            >
              Join Now
            </UButton>
          </div>
        </div>
        
        <!-- Dedicated Desk Plan -->
        <div class="bg-primary-50 rounded-2xl shadow-xl border-2 border-primary-500 relative transform scale-105">
          <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <UBadge color="primary" size="lg" class="px-4 py-2">
              Popular
            </UBadge>
          </div>
          <div class="p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Dedicated Desk</h3>
            <div class="text-4xl font-bold text-primary-600 mb-6">
              $89<span class="text-lg text-gray-500">/mo</span>
            </div>
            <p class="text-gray-600 mb-8">
              Your own dedicated desk in the common area. Perfect for focused work with access to all amenities.
            </p>
            
            <ul class="space-y-4 mb-8">
              <li v-for="feature in dedicatedDeskFeatures" :key="feature" class="flex items-start">
                <Icon name="i-heroicons-check-circle" class="text-green-500 mt-1 mr-3 shrink-0" />
                <span class="text-gray-700">{{ feature }}</span>
              </li>
            </ul>
            
            <UButton 
              size="lg" 
              block 
              color="primary"
              class="hover:bg-primary-700 transition-colors"
            >
              Join Now
            </UButton>
          </div>
        </div>
        
        <!-- Dedicated Office Plan -->
        <div class="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <div class="p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Dedicated Office</h3>
            <div class="text-4xl font-bold text-primary-600 mb-6">
              $228<span class="text-lg text-gray-500">/mo</span>
            </div>
            <p class="text-gray-600 mb-8">
              Private office space for your team. Complete privacy with all premium amenities included.
            </p>
            
            <ul class="space-y-4 mb-8">
              <li v-for="feature in dedicatedOfficeFeatures" :key="feature" class="flex items-start">
                <Icon name="i-heroicons-check-circle" class="text-green-500 mt-1 mr-3 shrink-0" />
                <span class="text-gray-700">{{ feature }}</span>
              </li>
            </ul>
            
            <UButton 
              size="lg" 
              block 
              variant="outline"
              class="hover:bg-primary-50 hover:border-primary-500 transition-colors"
            >
              Join Now
            </UButton>
          </div>
        </div>
      </div>
      
      <!-- CTA Section -->
      <div class="text-center mt-16">
        <h3 class="text-2xl font-bold text-gray-900 mb-4">
          Space to make your greatest impact.
        </h3>
        <UButton size="xl" color="primary" class="px-8 py-4 text-lg">
          Get Your Place
        </UButton>
      </div>
    </div>
  </section>
</template>

<script setup>
const membershipFeatures = [
  '1 hr/mo Conference Rooms',
  'High Speed Internet',
  'Access to Professional Network',
  '24x7 Kitchen and Free Coffee and Beer'
]

const dedicatedDeskFeatures = [
  'Dedicated Desk Space',
  'Unlimited Conference Room Access',
  'High Speed Internet',
  'Access to Professional Network',
  '24x7 Kitchen and Free Coffee and Beer',
  'Personal Storage Locker'
]

const dedicatedOfficeFeatures = [
  'Private Office Space',
  'Unlimited Conference Room Access',
  'High Speed Internet',
  'Access to Professional Network',
  '24x7 Kitchen and Free Coffee and Beer',
  'Personal Storage Locker',
  'Team Meeting Room Access',
  'Premium Furnishings'
]
</script>
