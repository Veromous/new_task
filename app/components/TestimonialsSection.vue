<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          People Who Love Our Place
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover a workspace designed to inspire focus, collaboration, and creativity.
        </p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <!-- Testimonial 1 -->
        <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
          <div class="flex items-center mb-4">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
              alt="Sarah Johnson"
              class="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h4 class="font-semibold text-gray-900">Sarah Johnson</h4>
              <p class="text-sm text-gray-600">Freelance Designer</p>
            </div>
          </div>
          <div class="flex mb-3">
            <Icon v-for="i in 5" :key="i" name="i-heroicons-star" class="text-yellow-400 w-5 h-5" />
          </div>
          <p class="text-gray-700 italic">
            "This co-working space has transformed my productivity. The community is amazing and the amenities are top-notch. Worth every penny!"
          </p>
        </div>
        
        <!-- Testimonial 2 -->
        <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
          <div class="flex items-center mb-4">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
              alt="Michael Chen"
              class="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h4 class="font-semibold text-gray-900">Michael Chen</h4>
              <p class="text-sm text-gray-600">Startup Founder</p>
            </div>
          </div>
          <div class="flex mb-3">
            <Icon v-for="i in 5" :key="i" name="i-heroicons-star" class="text-yellow-400 w-5 h-5" />
          </div>
          <p class="text-gray-700 italic">
            "Perfect environment for our growing team. The dedicated office option gave us the privacy we needed while still being part of a vibrant community."
          </p>
        </div>
        
        <!-- Testimonial 3 -->
        <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
          <div class="flex items-center mb-4">
            <img 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
              alt="Emily Rodriguez"
              class="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h4 class="font-semibold text-gray-900">Emily Rodriguez</h4>
              <p class="text-sm text-gray-600">Marketing Consultant</p>
            </div>
          </div>
          <div class="flex mb-3">
            <Icon v-for="i in 5" :key="i" name="i-heroicons-star" class="text-yellow-400 w-5 h-5" />
          </div>
          <p class="text-gray-700 italic">
            "The networking opportunities alone make this place incredible. I've connected with so many talented professionals who've become clients and friends."
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic here if needed
</script>
