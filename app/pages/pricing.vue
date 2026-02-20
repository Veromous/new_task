<template>
  <div style="background: #F5F6FA;">
    <!-- Page Hero -->
    <section class="page-hero">
      <UContainer>
        <UBadge variant="soft" class="mb-4 px-4 py-1.5 text-sm font-semibold rounded-full"
          style="background: rgba(91,139,245,0.2); color: #B3CBFB;">
          Simple Pricing
        </UBadge>
        <h1 class="page-hero-title">
          Choose Your Perfect Plan
        </h1>
        <p class="page-hero-desc">
          Transparent pricing with no hidden fees. Scale up or down anytime.
          Find the workspace that fits your needs and budget.
        </p>
      </UContainer>
    </section>

    <PricingCards />
    <PricingSection />
    <TestimonialsSection />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Pricing — TheWorkPlace',
  description: 'Simple, transparent pricing for co-working spaces. Daily passes, monthly memberships, and private offices.',
  ogTitle: 'Pricing — TheWorkPlace',
  ogDescription: 'Simple, transparent pricing for co-working spaces. Daily passes, monthly memberships, and private offices.'
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
