<template>
  <section class="facilities-section">
    <UContainer>
      <!-- Section Title -->

      <div class="facilities-grid">

        <!-- Left: Text Content -->
        

        <!-- Right: Image with floating card -->
        <div class="facilities-image-wrapper">
          <!-- Decorative arc behind -->
          <div class="decorative-arc"></div>

          <div class="facilities-image">
            <img
              src="https://images.unsplash.com/photo-1600508774634-4e11d34730e2?w=700&h=800&fit=crop&crop=center"
              alt="Person working in modern co-working space"
              loading="lazy"
            />
          </div>

          <!-- Floating info card -->
          <div class="floating-card">
            <div class="floating-card-icon">
              <UIcon name="i-heroicons-briefcase" class="w-5 h-5" />
            </div>
            <div class="floating-card-content">
              <h4 class="floating-card-title">Anything You Need</h4>
              <p class="floating-card-desc">
                From flexible plans to modern interiors, every detail is designed to
                help you focus on what truly matters — your work and growth.
              </p>
            </div>
          </div>
        </div>

        <div class="facilities-text">
          <h2 class="facilities-title">
            Most Affordable Co-Working Place In The City
          </h2>

          <p class="facilities-desc">
            we’ve made it our mission to offer premium co-working spaces at prices everyone can afford. Enjoy all the perks of a modern, fully equipped workspace — without the high costs of a traditional office. Our flexible membership plans are designed to fit every budget, giving freelancers, startups, and professionals access to an inspiring environment where productivity meets affordability.
          </p>

          <!-- Feature badges -->
          <div class="facilities-badges">
            <div class="facility-badge">
              <div class="badge-icon">
                <UIcon name="i-lucide-person-standing" class="w-5 h-5" />
              </div>
              <span class="badge-label">Membership Package</span>
            </div>
            <div class="facility-badge">
              <div class="badge-icon badge-icon-alt">
                <UIcon name="i-lucide-users" class="w-5 h-5" />
              </div>
              <span class="badge-label">Dedicated Office Package</span>
            </div>
          </div>

          <!-- CTA Button -->
          <NuxtLink to="/about" class="facilities-btn">
            Check Pricing
            <UIcon name="i-heroicons-arrow-right" class="w-5 h-5" />
          </NuxtLink>
        </div>

      </div>
    </UContainer>
  </section>
</template>

<style scoped>
.facilities-section {
  padding: 5rem 0;
  background: #ffffff;
  overflow: hidden;
}

/* title instead  */
.section-top-title {
  font-size: 2.25rem;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 3.5rem;
}

.facilities-grid {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
}

/* ── Left column: Text ── */
.facilities-text {
  max-width: 560px;
}

.facilities-title {
  /* font-size: 2rem;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #111111;
  margin-bottom: 1.5rem; */

  font-size: 1.75rem;
  font-weight: 800;
  line-height: 1.2;
  color: #111111;
  letter-spacing: -0.02em;
  margin-bottom: 3.5rem;
}

.facilities-desc {
  font-size: 0.9375rem;
  line-height: 1.8;
  color: #555555;
  font-weight: 400;
  margin-bottom: 2rem;
}

/* Feature badges */
.facilities-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.facility-badge {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.badge-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #EEF3FE;
  color: #2557D6;
  flex-shrink: 0;
}

.badge-icon-alt {
  background: #FEF3EE;
  color: #D67225;
}

.badge-label {
  font-size: 0.9375rem;
  font-weight: 700;
  color: #111111;
}

/* CTA Button */
.facilities-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #1E3FAF;
  color: #ffffff;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 0.875rem 2rem;
  border-radius: 0.625rem;
  text-decoration: none;
  box-shadow: 0 4px 14px rgba(30, 63, 175, 0.4);
  transition: all 0.2s ease;
}

.facilities-btn:hover {
  background: #162F8A;
  box-shadow: 0 6px 20px rgba(30, 63, 175, 0.5);
  transform: translateY(-1px);
}

/* ── Right column: Image ── */
.facilities-image-wrapper {
  position: relative;
  width: 100%;
  max-width: 520px;
}

.decorative-arc {
  position: absolute;
  top: -20px;
  left: -30px;
  width: 110%;
  height: 110%;
  border-radius: 50%;
  background: linear-gradient(135deg, #F0F2F8 0%, #E8EDF5 100%);
  z-index: 0;
}

.facilities-image {
  position: relative;
  z-index: 1;
  border-radius: 1.25rem;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
}

.facilities-image img {
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  display: block;
}

/* Floating card */
.floating-card {
  position: absolute;
  bottom: 30px;
  right: -10px;
  z-index: 2;
  background: linear-gradient(135deg, #2557D6 0%, #1E3FAF 100%);
  border-radius: 1rem;
  padding: 1.25rem 1.5rem;
  max-width: 300px;
  display: flex;
  gap: 0.875rem;
  box-shadow: 0 12px 40px rgba(37, 87, 214, 0.35);
}

.floating-card-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  flex-shrink: 0;
}

.floating-card-content {
  flex: 1;
  min-width: 0;
}

.floating-card-title {
  font-size: 0.9375rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.375rem;
}

.floating-card-desc {
  font-size: 0.8125rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 400;
}

/* ── Tablet ── */
@media (min-width: 768px) {
  .facilities-section {
    padding: 6rem 0;
  }

  .facilities-grid {
    flex-direction: row;
    gap: 4rem;
    align-items: center;
  }

  .facilities-text {
    flex: 1;
    min-width: 0;
  }

  .facilities-title {
    font-size: 2.25rem;
  }

  .facilities-image-wrapper {
    flex: 0 0 45%;
    max-width: 45%;
  }

  .floating-card {
    right: -30px;
    bottom: 40px;
  }
}

/* ── Desktop ── */
@media (min-width: 1024px) {
  .facilities-section {
    padding: 7rem 0;
  }

  .facilities-grid {
    gap: 5rem;
  }

  .facilities-title {
    font-size: 2.625rem;
  }

  .facilities-desc {
    font-size: 0.975rem;
  }

  .facilities-image-wrapper {
    flex: 0 0 48%;
    max-width: 48%;
  }

  .floating-card {
    right: -40px;
    bottom: 50px;
    max-width: 320px;
    padding: 1.5rem 1.75rem;
  }
}
</style>
