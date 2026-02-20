<template>
  <!--
    The fixed header (transparent) sits on top of this section automatically.
    Background image: people in a co-working space, one person facing the camera.
    Overlay: deep royal blue tint for readability while keeping the photo visible.
  -->
  <section
    class="relative min-h-screen flex items-center justify-start"
    style="
      background-image: url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&auto=format');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      border-bottom-right-radius: 6rem;
    "
  >
    <!-- Royal blue dark overlay -->
    <div
      class="absolute inset-0"
      style="background: linear-gradient(135deg, rgba(9,25,96,0.72) 0%, rgba(15,37,121,0.65) 60%, rgba(37,87,214,0.55) 100%); border-bottom-right-radius: 6rem;"
    ></div>

    <!-- Content — centered, sits above the overlay -->
    <div class="relative z-10 text-left px-6 w-full max-w-2xl mx-0 pl-6 md:pl-16 lg:pl-24 pt-36">

      <!-- Title -->
      <h1 class="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
        A Better Place<br />To Work
      </h1>

      <!-- Description -->
      <p class="text-base md:text-lg text-white/85 leading-relaxed mb-10">
        Discover a workspace designed to inspire focus, collaboration, and creativity.
        Our modern co-working environment offers flexible plans, high-speed connectivity,
        and all the comforts you need to stay productive and connected every day.
      </p>

      <!-- Royal blue Learn More button -->
      <UButton
        to="/"
        size="xl"
        class="font-bold px-8 shadow-xl transition-colors duration-200"
        :style="clicked
          ? 'background: white; color: #2557D6;'
          : 'background: #2557D6; color: white;'"
        @click="clicked = true"
      >
        Learn More
        <template #trailing>
          <UIcon name="i-heroicons-arrow-right" class="w-5 h-5" />
        </template>
      </UButton>

    </div>


  </section>
</template>

<script setup lang="ts">
const clicked = ref(false)
</script>
