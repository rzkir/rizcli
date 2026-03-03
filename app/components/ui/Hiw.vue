<template>
  <!-- How it Works / Quick Start -->
  <section id="how-it-works" class="py-24 px-6 bg-slate-50 border-t border-brand-border relative overflow-hidden">
    <div class="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 class="font-display text-3xl md:text-4xl font-bold mb-6 text-brand-dark">
            Start building in <span class="text-brand-cyan">3 simple steps</span>
          </h2>
          <p class="text-brand-muted text-lg mb-8">
            No global installation required. Use NPX to always fetch the latest version of our templates directly
            from the repository.
          </p>

          <div class="space-y-6">
            <div v-for="(step, index) in howItWorksSteps" :key="step.title" class="flex gap-4">
              <div class="flex flex-col items-center">
                <div
                  class="w-8 h-8 rounded-full bg-white border border-brand-border shadow-sm flex items-center justify-center text-brand-cyan font-mono text-sm font-bold shrink-0">
                  {{ index + 1 }}
                </div>
                <div v-if="index !== howItWorksSteps.length - 1" class="w-px h-full bg-brand-border mt-2" />
              </div>
              <div class="pb-4">
                <h4 class="text-lg font-bold text-brand-dark mb-1">{{ step.title }}</h4>
                <p class="text-brand-muted">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Code Block -->
        <div class="bg-white rounded-2xl border border-brand-border shadow-soft p-2">
          <div class="bg-brand-surface rounded-xl overflow-hidden border border-brand-border/50">
            <div class="flex items-center px-4 py-3 border-b border-brand-border bg-white">
              <span class="text-xs text-slate-500 font-mono font-medium">Quick Start</span>
            </div>
            <div class="p-6 font-mono text-sm leading-8 overflow-x-auto text-brand-dark">
              <div v-for="(cmd, index) in quickStart" :key="index" class="mb-6 last:mb-0">
                <div class="text-slate-400 mb-1">{{ cmd.label }}</div>
                <div class="flex">
                  <span class="text-brand-cyan mr-3">$</span>
                  <span>
                    {{ cmd.textBefore }}
                    <span v-if="cmd.highlight" class="text-indigo-600">{{ cmd.highlight }}</span>
                    {{ cmd.textAfter }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import data from "@/assets/data/data.json";

const howItWorksSteps = data.howItWorksSteps;
const quickStart = data.quickStart;
</script>
