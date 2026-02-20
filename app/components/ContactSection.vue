<template>
  <section class="py-24" style="background:#EEF3FE">
    <UContainer>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <!-- Left: Image -->
        <div class="relative">
          <div class="absolute -inset-4 rounded-3xl rotate-1 opacity-50"
            style="background: linear-gradient(135deg, #B3CBFB, #D9E5FD);"></div>
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=700&h=600&fit=crop&crop=center"
            alt="Professional office interior"
            class="relative w-full rounded-3xl shadow-2xl object-cover aspect-[4/3]"
            loading="lazy"
          />
          <div class="absolute -bottom-6 -right-4 bg-white rounded-2xl shadow-xl p-5 min-w-[200px]">
            <div class="space-y-3">
              <div class="flex items-center gap-3 text-sm text-gray-700">
                <UIcon name="i-heroicons-envelope" class="w-4 h-4 shrink-0" style="color:#2557D6" />
                hello@theworkplace.com
              </div>
              <div class="flex items-center gap-3 text-sm text-gray-700">
                <UIcon name="i-heroicons-phone" class="w-4 h-4 shrink-0" style="color:#2557D6" />
                (555) 123-4567
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Form -->
        <div>
          <UBadge color="primary" variant="soft" class="mb-4 px-4 py-1.5 text-sm font-semibold rounded-full">
            Contact Us
          </UBadge>
          <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-8" style="color:#0F2579">
            Get In Touch
          </h2>

          <UCard class="shadow-xl border" style="border-color:#D9E5FD" :ui="{ body: { padding: 'p-8' } }">
            <form class="space-y-5" @submit.prevent="handleSubmit">
              <UFormGroup label="Name" name="name">
                <UInput v-model="form.name" placeholder="Your full name" size="lg" icon="i-heroicons-user" />
              </UFormGroup>
              <UFormGroup label="Email" name="email">
                <UInput v-model="form.email" placeholder="your@email.com" type="email" size="lg" icon="i-heroicons-envelope" />
              </UFormGroup>
              <UFormGroup label="Message" name="message">
                <UTextarea v-model="form.message" placeholder="Tell us about your needs…" size="lg" :rows="4" />
              </UFormGroup>
              <UButton type="submit" size="lg" block color="primary" class="font-bold mt-2" :loading="sending">
                Send Message
                <template #trailing>
                  <UIcon name="i-heroicons-paper-airplane" class="w-4 h-4" />
                </template>
              </UButton>
            </form>
          </UCard>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const form = ref({ name: '', email: '', message: '' })
const sending = ref(false)

const handleSubmit = async () => {
  sending.value = true
  await new Promise(r => setTimeout(r, 1200))
  sending.value = false
  form.value = { name: '', email: '', message: '' }
}
</script>
