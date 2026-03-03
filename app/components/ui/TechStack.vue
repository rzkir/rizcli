<template>
  <!-- Logos / Tech Stack -->
  <section class="py-10 border-y border-brand-border bg-brand-surface">
    <div class="max-w-7xl mx-auto px-6 relative">
      <p class="text-center text-sm font-medium text-brand-muted mb-10 uppercase tracking-wider">
        Build with your favorite tools
      </p>
      <!-- Marquee wrapper -->
      <div class="tech-marquee overflow-hidden">
        <div
          class="tech-marquee-track opacity-60 grayscale hover:grayscale-0 transition-all duration-500 flex gap-12 md:gap-16">
          <div v-for="loopIndex in 2" :key="loopIndex" class="flex items-center gap-12 md:gap-16"
            :aria-hidden="loopIndex === 2">
            <Icon v-for="tech in techStacks" :key="`${loopIndex}-${tech.name}`" :name="tech.icon"
              class="text-3xl md:text-4xl transition-transform hover:scale-110" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import data from "@/assets/data/data.json";

const baseTechStacks = data.techStacks;

const repeatCount = 4;
const techStacks = Array.from({ length: repeatCount }, () => baseTechStacks).flat();
</script>
