<template>
  <section class="impact-section">
    <div class="impact-layout">

      <!-- Blue background band — spans from behind-image top to front-image bottom -->
      <div class="blue-band"></div>

      <!-- Left: overlapping images -->
      <div class="impact-images-col">
        <div class="impact-images">
          <!-- Large image (front, top-left) -->
          <div class="img-large">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&auto=format"
              alt="Co-working space interior"
            />
          </div>
          <!-- Small image (behind, bottom-right) -->
          <div class="img-small">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&h=400&fit=crop&auto=format"
              alt="Team collaborating"
            />
          </div>
        </div>
      </div>

      <!-- Right: text content (inside blue band) -->
      <div class="impact-content-col">
        <div class="impact-content">
          <h2 class="impact-title">
            Space to make your<br />greatest impact.
          </h2>
          <p class="impact-desc">
            We've built more than just an office — we've built a thriving community.
            Our co-working hub gives you everything you need to stay focused,
            comfortable, and connected.
          </p>
          <NuxtLink to="/" class="impact-btn">
            Get Your Place
            <UIcon name="i-heroicons-arrow-right" class="impact-btn-icon" />
          </NuxtLink>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.impact-section {
  padding: 3rem 0;
  background: #F5F6FA;
  overflow: hidden;
}

/*
  Layout container — position: relative so the blue band
  can be absolutely positioned behind the content.
*/
.impact-layout {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 1.25rem;
  max-width: 1200px;
  margin: 0 auto;
}

/*
  Blue band. On mobile (stacked):
    - Starts at 15% of the image container (top of behind image)
    - Extends to the bottom of the whole layout (covering text area below)
  We do this by positioning it from top: ~15% of image height to 100%.
  The images container has aspect-ratio 3/4, so 15% of that height is where the behind image starts.
*/
.blue-band {
  position: absolute;
  left: 0;
  right: 0;
  /* Mobile: from behind-image top (~15% of image area) to bottom */
  top: 12%;
  bottom: 0;
  background: #2557D6;
  border-radius: 1.25rem;
  z-index: 0;
  /* On mobile the blue is full-width behind everything */
}

/* ── Images column ── */
.impact-images-col {
  position: relative;
  z-index: 2;
}

.impact-images {
  position: relative;
  width: 85%;
  aspect-ratio: 2 / 3;
}

.img-large {
  position: absolute;
  top: 0;
  left: 0;
  width: 78%;
  height: 85%;
  border-radius: 1.25rem;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  z-index: 2;
}

.img-large img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.img-small {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 55%;
  height: 85%;
  border-radius: 1.25rem;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  z-index: 1;
}

.img-small img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ── Text content ── */
.impact-content-col {
  position: relative;
  z-index: 2;
  padding: 2.5rem 1.5rem 0;
  text-align: left;
}

.impact-content {
  text-align: left;
}

.impact-title {
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 1.25rem;
}

.impact-desc {
  font-size: 0.9375rem;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 400;
  margin-bottom: 2rem;
  max-width: 480px;
}

.impact-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 0.5rem;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 0.75rem 2rem;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
}

.impact-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-1px);
}

.impact-btn-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: #ffffff;
}

/* ── Desktop: side by side ── */
@media (min-width: 768px) {
  .impact-section {
    padding: 4rem 0;
  }

  .impact-layout {
    flex-direction: row;
    align-items: stretch;
    padding: 0 0 0 2.5rem;
  }

  /*
    Desktop blue band:
    - starts just past the images (left ~42%)
    - extends to the right edge
    - top aligns with behind image top, bottom with front image bottom
  */
  .blue-band {
    left: 42%;
    right: -9999px;
    top: 15%;
    bottom: 15%;
    border-radius: 1.25rem 0 0 1.25rem;
  }

  .impact-images-col {
    flex: 0 0 44%;
    min-width: 0;
    padding: 0;
  }

  .impact-images {
    aspect-ratio: 3 / 4;
    width: 100%;
    min-height: 460px;
  }

  .impact-content-col {
    flex: 1;
    min-width: 0;
    padding: 0;
    display: flex;
    align-items: center;
    padding-left: 3rem;
    padding-right: 2.5rem;
  }

  .impact-title {
    font-size: 2.5rem;
  }
}

@media (min-width: 1024px) {
  .impact-layout {
    padding: 0 0 0 3rem;
  }

  .impact-images {
    min-height: 520px;
  }

  .impact-content-col {
    padding-left: 3.5rem;
    padding-right: 3rem;
  }

  .impact-title {
    font-size: 2.75rem;
  }
}
</style>
