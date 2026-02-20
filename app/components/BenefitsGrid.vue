<template>
  <section class="benefits-section">
    <UContainer>
      <!-- Top row: 3 items -->
      <div class="benefits-row-top">
        <div
          v-for="item in benefits.slice(0, 3)"
          :key="item.topic"
          class="benefit-card"
        >
          <div class="benefit-icon-wrap">
            <Icon :name="item.icon" class="benefit-icon" />
          </div>
          <h3 class="benefit-topic">{{ item.topic }}</h3>
          <p class="benefit-desc">{{ item.description }}</p>
        </div>
      </div>

      <!-- Bottom row: 2 items, centered -->
      <div class="benefits-row-bottom">
        <div
          v-for="item in benefits.slice(3)"
          :key="item.topic"
          class="benefit-card"
        >
          <div class="benefit-icon-wrap">
            <Icon :name="item.icon" class="benefit-icon" />
          </div>
          <h3 class="benefit-topic">{{ item.topic }}</h3>
          <p class="benefit-desc">{{ item.description }}</p>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const benefits = [
  {
    topic: '24 Hrs Access',
    description: 'With round-the-clock access, you can work anytime your creativity strikes.',
    icon: 'lucide:clock'
  },
  {
    topic: 'Conference Room',
    description: 'Collaborate effectively with clients in well-equipped meeting zones.',
    icon: 'lucide:users'
  },
  {
    topic: 'High Speed Internet',
    description: 'Seamless video calls & browsing, instant uploads - we\'ve got it covered.',
    icon: 'lucide:gauge'
  },
  {
    topic: 'Modern Interiors',
    description: 'Work in a vibrant, thoughtfully designed environment that boosts creativity.',
    icon: 'lucide:armchair'
  },
  {
    topic: 'Flexible Plans',
    description: 'Choose daily, weekly, or monthly options that suit your schedule.',
    icon: 'lucide:settings'
  }
]
</script>

<style scoped>
.benefits-section {
  padding: 4rem 0 5rem;
  background: #F5F6FA;
}

/* Top row: 1 col mobile → 3 col desktop */
.benefits-row-top {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

/* Bottom row: 1 col mobile → 2 col desktop, centered */
.benefits-row-bottom {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  max-width: 100%;
}

/* Each card */
.benefit-card {
  background: #ffffff;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}

.benefit-card:hover {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

/* Icon wrapper */
.benefit-icon-wrap {
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  background: #EEF3FE;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.benefit-icon {
  width: 1.35rem;
  height: 1.35rem;
  color: #2557D6;
}

/* Topic */
.benefit-topic {
  font-size: 1rem;
  font-weight: 600;
  color: #111111;
  margin-bottom: 0.5rem;
}

/* Description */
.benefit-desc {
  font-size: 0.875rem;
  line-height: 1.65;
  color: #6b7280;
  font-weight: 400;
}

/* Medium+ screens: 3 top, 2 bottom centered */
@media (min-width: 768px) {
  .benefits-row-top {
    grid-template-columns: repeat(3, 1fr);
  }

  .benefits-row-bottom {
    grid-template-columns: repeat(2, 1fr);
    max-width: 66.666%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
