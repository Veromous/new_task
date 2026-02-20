<template>
  <!-- THICKER / DEEPEST royal blue for footer -->
  <footer class="pt-16 pb-8" style="background: #091960;">
    <UContainer>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b" style="border-color: rgba(91,139,245,0.2)">
        <!-- Brand -->
        <div class="space-y-4">
          <div class="flex items-center gap-2">
            <UChip color="primary" size="sm">
              <span class="text-xl font-extrabold text-white tracking-tight">TheWorkPlace</span>
            </UChip>
          </div>
          <p class="text-sm leading-relaxed max-w-xs" style="color:#7FABF8">
            Your premium co-working space — where great ideas come to life.
          </p>
          <!-- Social icons -->
          <div class="flex gap-3 pt-2">
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

        <!-- Nav links -->
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

        <!-- Contact info -->
        <div>
          <h4 class="font-semibold text-white mb-5 text-sm uppercase tracking-widest">Contact</h4>
          <ul class="space-y-4">
            <li v-for="info in contactInfo" :key="info.label" class="flex items-start gap-3">
              <UIcon :name="info.icon" class="w-4 h-4 mt-0.5 shrink-0" style="color:#5B8BF5" />
              <span class="text-sm" style="color:#7FABF8">{{ info.value }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Footer bottom -->
      <div class="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm" style="color:rgba(91,139,245,0.6)">
          © 2026 Co-Working Space. All rights reserved.
        </p>
        <div class="flex gap-4 text-xs" style="color:rgba(91,139,245,0.5)">
          <a href="#" class="hover:text-white/60 transition-colors">Privacy Policy</a>
          <span>·</span>
          <a href="#" class="hover:text-white/60 transition-colors">Terms of Service</a>
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
  { label: 'address', icon: 'i-heroicons-map-pin',  value: '123 Business Ave, City Center' },
  { label: 'email',   icon: 'i-heroicons-envelope', value: 'hello@theworkplace.com' },
  { label: 'phone',   icon: 'i-heroicons-phone',    value: '(555) 123-4567' }
]

const socials = [
  { label: 'Twitter',   icon: 'i-simple-icons-twitter' },
  { label: 'LinkedIn',  icon: 'i-simple-icons-linkedin' },
  { label: 'Instagram', icon: 'i-simple-icons-instagram' }
]
</script>
