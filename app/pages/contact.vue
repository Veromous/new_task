<template>
  <div style="background: #F5F6FA;">
    <!-- Page Hero -->
    <section class="page-hero">
      <UContainer>
        <UBadge color="primary" variant="soft" class="mb-4 px-4 py-1.5 text-sm font-semibold rounded-full"
          style="background: rgba(91,139,245,0.2); color: #B3CBFB;">
          Contact Us
        </UBadge>
        <h1 class="page-hero-title">
          Get In Touch
        </h1>
        <p class="page-hero-desc">
          Have questions or ready to book your workspace?
          We'd love to hear from you. Reach out and our team will respond promptly.
        </p>
      </UContainer>
    </section>

    <ContactSection />

    <!-- Map / Location Info -->
    <section class="py-20 bg-white">
      <UContainer>
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight" style="color:#0F2579">
            Find Us
          </h2>
          <p class="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            Visit our workspace and see for yourself why professionals love TheWorkPlace.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div class="text-center p-6">
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
              style="background: #EEF3FE;">
              <UIcon name="i-heroicons-map-pin" class="w-7 h-7" style="color:#2557D6" />
            </div>
            <h3 class="font-bold text-lg mb-2" style="color:#0F2579">Address</h3>
            <p class="text-gray-500 text-sm">123 Business District<br />Downtown, City 10001</p>
          </div>

          <div class="text-center p-6">
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
              style="background: #EEF3FE;">
              <UIcon name="i-heroicons-clock" class="w-7 h-7" style="color:#2557D6" />
            </div>
            <h3 class="font-bold text-lg mb-2" style="color:#0F2579">Office Hours</h3>
            <p class="text-gray-500 text-sm">Mon – Fri: 7 AM – 10 PM<br />Sat – Sun: 9 AM – 6 PM</p>
          </div>

          <div class="text-center p-6">
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
              style="background: #EEF3FE;">
              <UIcon name="i-heroicons-phone" class="w-7 h-7" style="color:#2557D6" />
            </div>
            <h3 class="font-bold text-lg mb-2" style="color:#0F2579">Phone & Email</h3>
            <p class="text-gray-500 text-sm">(555) 123-4567<br />hello@theworkplace.com</p>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Contact Us — TheWorkPlace',
  description: 'Get in touch with TheWorkPlace. Reach out for inquiries, bookings, or to schedule a tour of our co-working space.',
  ogTitle: 'Contact Us — TheWorkPlace',
  ogDescription: 'Get in touch with TheWorkPlace. Reach out for inquiries, bookings, or to schedule a tour of our co-working space.'
})
</script>

<style scoped>
.page-hero {
  padding: 6rem 0 4rem;
  background: linear-gradient(135deg, #163499 0%, #0F2579 100%);
  text-align: center;
}

.page-hero-title {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 1.25rem;
}

.page-hero-desc {
  font-size: 1rem;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .page-hero {
    padding: 8rem 0 5rem;
  }
  .page-hero-title {
    font-size: 3.25rem;
  }
  .page-hero-desc {
    font-size: 1.0625rem;
  }
}
</style>
