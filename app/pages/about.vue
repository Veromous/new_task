<template>
  <div style="background: #F5F6FA;">
    <!-- Page Hero -->
    <section class="page-hero">
      <UContainer>
        <UBadge color="primary" variant="soft" class="mb-4 px-4 py-1.5 text-sm font-semibold rounded-full">
          About Us
        </UBadge>
        <h1 class="page-hero-title">
          A Place That Helps Growth<br />Of Your Work
        </h1>
        <p class="page-hero-desc">
          Work. Connect. Create. Your Perfect Co-Working Space Awaits.
          A flexible, inspiring workspace designed for professionals, freelancers,
          and teams who want to work smarter, not harder.
        </p>
      </UContainer>
    </section>

    <ImpactSection />
    <ImageTextSplit />
    <BenefitsGrid />
    <TestimonialsSection />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'About Us — TheWorkPlace',
  description: 'Learn more about TheWorkPlace – our mission, values, and the community behind a better way to work.',
  ogTitle: 'About Us — TheWorkPlace',
  ogDescription: 'Learn more about TheWorkPlace – our mission, values, and the community behind a better way to work.'
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
