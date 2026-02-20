<template>
  <section class="about-section">
    <UContainer>
      <div class="about-content">

        <!-- Title -->
        <h2 class="about-title">
          A Place That Helps Growth<br />Of Your Work
        </h2>

        <!-- Description -->
        <p class="about-description">
          Work. Connect. Create. Your Perfect Co-Working Space Awaits.
          A flexible, inspiring workspace designed for professionals, freelancers,
          and teams who want to work smarter, not harder.
        </p>

        <!-- About Us Button -->
        <UButton
          to="/about"
          size="xl"
          class="about-btn"
        >
          About Us
          <template #trailing>
            <UIcon name="i-heroicons-arrow-right" class="w-5 h-5" />
          </template>
        </UButton>

      </div>
    </UContainer>
  </section>
</template>

<style scoped>
.about-section {
  padding: 5rem 0;
  background: #ffffff;
}

.about-content {
  text-align: left;
  max-width: 640px;
}

.about-title {
  font-size: 2.25rem;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #111111;
  margin-bottom: 1.5rem;
}

.about-description {
  font-size: 0.9375rem;
  line-height: 1.75;
  color: #111111;
  font-weight: 300;
  margin-bottom: 2.5rem;
}

.about-btn {
  background: #1E3FAF !important;
  color: #ffffff !important;
  font-weight: 700;
  padding-left: 2rem;
  padding-right: 2rem;
  box-shadow: 0 4px 14px rgba(30, 63, 175, 0.4);
  transition: all 0.2s ease;
}

.about-btn:hover {
  background: #162F8A !important;
  box-shadow: 0 6px 20px rgba(30, 63, 175, 0.5);
  transform: translateY(-1px);
}

/* Medium screens and up — center everything */
@media (min-width: 768px) {
  .about-content {
    text-align: center;
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
  }

  .about-title {
    font-size: 2.75rem;
  }

  .about-description {
    font-size: 0.9675rem;
    font-weight: 300;
  }
}

/* Large screens */
@media (min-width: 1024px) {
  .about-section {
    padding: 6rem 0;
  }

  .about-title {
    font-size: 3rem;
  }
}
</style>
