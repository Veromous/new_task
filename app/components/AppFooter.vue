<template>
  <!-- THICKER / DEEPEST royal blue for footer -->
  <footer class="pt-16 pb-8" style="background: #091960;">
    <UContainer>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b" style="border-color: rgba(91,139,245,0.2)">
        <!-- Section 1: Brand -->
        <div class="space-y-4">
          <div class="flex items-center gap-2">
            <UChip color="primary" size="sm">
              <span class="text-xl font-extrabold text-white tracking-tight">TheWorkPlace</span>
            </UChip>
          </div>
          <p class="text-sm leading-relaxed max-w-xs" style="color:#7FABF8">
            Discover a workspace designed to inspire focus, collaboration, and creativity.
          </p>
        </div>

        <!-- Section 2: Quick Links -->
        <div>
          <h4 class="font-semibold text-white mb-5 text-sm uppercase tracking-widest">Quick Links</h4>
          <ul class="space-y-3">
            <li v-for="link in navLinks" :key="link.label">
              <NuxtLink
                :to="link.to"
                class="text-sm transition-colors flex items-center gap-2 group"
                style="color:#7FABF8"
              >
                <UIcon name="i-heroicons-chevron-right"
                  class="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-1" />
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Section 3: Contact Info -->
        <div>
          <h4 class="font-semibold text-white mb-5 text-sm uppercase tracking-widest">Important Links</h4>
          <ul class="space-y-4">
            <li v-for="info in contactInfo" :key="info.label" class="flex items-start gap-3">

              <span class="text-sm" style="color:#7FABF8">{{ info.value }}</span>
            </li>
          </ul>
        </div>

        <!-- Section 4: Follow Us with Social Icons -->
        <div>
          <h4 class="font-semibold text-white mb-5 text-sm uppercase tracking-widest">Let's Connect!</h4>
          <p class="text-sm leading-relaxed mb-4" style="color:#7FABF8">
            Connect with entrepreneurs, build your network, make great business.
          </p>
          <!-- Social icons -->
          <div class="flex gap-3">
            <UButton
              v-for="social in socials"
              :key="social.label"
              :icon="social.icon"
              variant="ghost"
              size="sm"
              square
              class="hover:bg-white/10 transition-colors"
              style="color:#7FABF8"
              :aria-label="social.label"
            />
          </div>
        </div>
      </div>

      <!-- Footer bottom with two separate writings at opposite ends -->
      <div class="pt-8 flex justify-between items-center">
        <p class="text-sm" style="color:rgba(91,139,245,0.6)">
          Copyright © 2026 Co-Working Space
        </p>
        <div class="flex gap-4" style="color:rgba(91,139,245,0.5)">
          <a href="#" class="hover:text-white/60 transition-colors text-sm">Powered by Co-Working Space</a>
        </div>
      </div>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">
const navLinks = [
  { label: 'Home',      to: '/' },
  { label: 'About',     to: '/about' },
  { label: 'Amenities', to: '/amenities' },
  { label: 'Pricing',   to: '/pricing' },
  { label: 'Contact',   to: '/contact' }
]

const contactInfo = [
  { label: 'address', value: 'Terms and Conditions' },
  { label: 'email', value: 'Legal' },
  { label: 'phone', value: 'Business' },
  { label: 'info', value: 'Partners'}
]

const socials = [
  { label: 'Twitter',   icon: 'i-simple-icons-twitter' },
  { label: 'LinkedIn',  icon: 'i-simple-icons-linkedin' },
  { label: 'Youtube', icon: 'i-simple-icons-youtube' },
  { label: 'Facebook',  icon: 'i-simple-icons-facebook' }
]
</script>
