<template>
  <!--
    The fixed header (transparent) sits on top of this section automatically.
    Background image: people in a co-working space, one person facing the camera.
    Overlay: deep royal blue tint for readability while keeping the photo visible.
  -->
  <section
    class="relative h-98 flex items-center justify-start"
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
      style="background: linear-gradient(135deg, rgba(53, 53, 53, 0.5) 10%, rgba(53,53,53, 0.5) 70%, rgba(53,53,53,0.55) 100%); border-bottom-right-radius: 6rem;"
    ></div>

    <!-- Content — centered, sits above the overlay -->
    <div class="relative z-8 text-left px-4 w-full max-w-2xl mx-0 pl-6 md:pl-10 lg:pl-24 pt-25">

      <!-- Title -->
      <h1 class="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
        About Us
      </h1>

      <!-- Description -->
      <p class="text-base md:text-lg text-white/85 leading-relaxed mb-10">
        We’ve redefined the way people work by creating a space that blends comfort, creativity, and community. 
      </p>
     
    </div>


  </section>
</template>

<script setup lang="ts">
const clicked = ref(false)
</script>
