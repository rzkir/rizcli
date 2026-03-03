<template>
  <!-- Features Section -->
  <section id="features" class="py-10 md:py-24 px-4 md:px-6 relative bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h2 class="font-display text-3xl md:text-4xl font-bold mb-4 text-brand-dark">Why use Rizki CLI?</h2>
        <p class="text-brand-muted text-lg">
          Designed to remove the friction of starting new projects. Focus on writing business logic, not
          configuration files.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="feature in features" :key="feature.title"
          class="bg-brand-surface border border-brand-border rounded-2xl p-8 hover:shadow-soft hover:border-brand-cyan/30 transition-all duration-300 group">
          <div
            class="w-12 h-12 rounded-xl bg-white border border-brand-border flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
            <Icon :name="feature.icon" class="text-2xl text-brand-cyan" />
          </div>
          <h3 class="font-display text-xl font-bold mb-3 text-brand-dark">{{ feature.title }}</h3>
          <p class="text-brand-muted leading-relaxed">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import data from "@/assets/data/data.json";

const features = data.features;
</script>
