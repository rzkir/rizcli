<template>
  <!-- Hero Section -->
  <section class="pt-10 md:pt-24 pb-10 md:pb-20 lg:pb-32 px-4 md:px-6 relative overflow-hidden">
    <div class="max-w-7xl mx-auto relative z-10">
      <div class="grid lg:grid-cols-12 gap-16 items-center">
        <!-- Left: Typography -->
        <div class="lg:col-span-6 flex flex-col items-start">
          <div
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-border bg-brand-surface mb-8">
            <span class="flex h-2 w-2 relative">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75" />
              <span class="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan" />
            </span>
            <span class="text-xs font-semibold tracking-wide text-brand-cyan">v1.0 is available</span>
          </div>

          <h1
            class="font-display text-5xl sm:text-6xl lg:text-[5rem] leading-[1.05] font-extrabold tracking-tight mb-6 text-brand-dark">
            Start your next <br class="hidden lg:block">
            project in <span class="text-brand-cyan">seconds.</span>
          </h1>

          <p class="text-lg sm:text-xl text-brand-muted max-w-xl leading-relaxed mb-10">
            Skip the boilerplate setup. Rizki CLI scaffolds your application architecture instantly with curated
            templates. One command, zero friction.
          </p>

          <div class="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <div class="relative group w-full sm:w-auto">
              <button
                class="relative flex items-center justify-between sm:justify-center gap-4 w-full sm:w-auto px-6 py-3.5 bg-white border border-brand-border shadow-sm rounded-xl font-mono text-sm hover:border-brand-cyan hover:shadow-glow transition-all"
                @click="emit('copy-command')">
                <div class="flex items-center gap-2">
                  <span class="text-brand-cyan font-bold">$</span>
                  <span class="text-brand-dark font-medium">npx rizki-cli create</span>
                </div>
                <div class="w-px h-4 bg-brand-border mx-2 hidden sm:block" />
                <Icon name="lucide:copy" class="text-brand-muted group-hover:text-brand-cyan transition-colors" />
              </button>
            </div>
            <NuxtLink to="https://github.com/rzkir/rizki-cli" target="_blank"
              class="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-brand-dark bg-brand-surface border border-transparent hover:border-brand-border transition-colors w-full sm:w-auto">
              View GitHub
              <iconify-icon icon="lucide:arrow-right" class="text-brand-muted" />
            </NuxtLink>
          </div>
        </div>

        <!-- Right: Terminal Showcase -->
        <div class="lg:col-span-6 relative w-full max-w-full lg:max-w-[600px] mx-auto lg:mx-0">
          <!-- Decorative offset background -->
          <div
            class="absolute inset-0 bg-brand-surface rounded-2xl transform translate-x-4 translate-y-4 border border-brand-border/50 -z-10" />

          <!-- Terminal Window -->
          <div
            class="rounded-2xl bg-slate-950 border border-brand-border shadow-soft overflow-hidden flex flex-col h-full">
            <!-- Header -->
            <div class="flex items-center px-4 py-3 border-b border-brand-border bg-slate-900/80 backdrop-blur-sm">
              <div class="flex space-x-2">
                <div
                  class="w-3 h-3 rounded-full border border-red-500/70 bg-red-500 shadow-[0_0_0_1px_rgba(0,0,0,0.35)]" />
                <div
                  class="w-3 h-3 rounded-full border border-amber-400/70 bg-amber-400 shadow-[0_0_0_1px_rgba(0,0,0,0.35)]" />
                <div
                  class="w-3 h-3 rounded-full border border-emerald-500/70 bg-emerald-500 shadow-[0_0_0_1px_rgba(0,0,0,0.35)]" />
              </div>
              <div class="mx-auto text-xs text-slate-400 font-medium font-sans flex items-center gap-1.5">
                <iconify-icon icon="lucide:terminal" class="text-slate-400" /> rizki-cli
              </div>
            </div>
            <!-- Body -->
            <div class="p-6 font-mono text-[13px] sm:text-sm leading-relaxed text-slate-100 min-h-[340px] bg-slate-950">
              <div class="mb-4 flex items-center gap-1">
                <span class="text-brand-cyan">~</span>
                <span class="text-slate-400">$</span>
                <span class="whitespace-pre">{{ typedCommand }}</span>
              </div>

              <!-- Step 1–2: Pilih template (list + animasi memilih) -->
              <div v-if="selectionStep === 1 || selectionStep === 2" class="space-y-1 mb-4">
                <div>{{ heroTerminal.command }}</div>
                <div>
                  <span class="font-semibold">{{ heroTerminal.templatePrompt }}</span>
                </div>
                <div class="text-brand-muted flex items-center gap-1 transition-colors duration-300"
                  :class="selectionStep === 2 ? 'text-brand-cyan font-semibold' : ''">
                  <span v-if="selectionStep === 2" class="text-brand-cyan">➜</span>
                  <span>1) {{ heroTerminal.templates[0] }}</span>
                </div>
                <div class="text-brand-muted">2) {{ heroTerminal.templates[1] }}</div>
                <div class="text-brand-muted">3) {{ heroTerminal.templates[2] }}</div>
                <div class="text-brand-muted">4) {{ heroTerminal.templates[3] }}</div>
                <div class="mt-2 text-brand-muted">5) {{ heroTerminal.templates[4] }}</div>
              </div>

              <!-- Step 3: Template selected (tetap tampil setelah dipilih) -->
              <div v-if="selectionStep >= 3" class="mb-4 flex items-center gap-2 text-emerald-400">
                <Icon name="lucide:check" class="text-emerald-500" />
                <span class="font-semibold">{{ heroTerminal.templatePrompt }}</span>
                <span>{{ heroTerminal.selectedTemplate }}</span>
              </div>

              <!-- Step 4–5: Pilih varian (list + animasi memilih) -->
              <div v-if="selectionStep === 4 || selectionStep === 5" class="space-y-1 mb-4">
                <div>
                  <span class="text-brand-cyan font-bold">?</span>
                  <span class="ml-1 font-semibold">{{ heroTerminal.variantPrompt }}</span>
                </div>
                <div class="text-brand-muted flex items-center gap-1 transition-colors duration-300"
                  :class="selectionStep === 5 ? 'text-brand-cyan font-semibold' : ''">
                  <span v-if="selectionStep === 5" class="text-brand-cyan">➜</span>
                  <span>1) {{ heroTerminal.variants[0] }}</span>
                </div>
                <div class="text-brand-muted">2) {{ heroTerminal.variants[1] }}</div>
                <div class="text-brand-muted flex items-center gap-1">
                  <span class="text-brand-cyan">➜</span>
                  <span>3) {{ heroTerminal.variants[2] }}</span>
                </div>
                <div class="text-brand-muted">4) {{ heroTerminal.variants[3] }}</div>
              </div>

              <!-- Step 6: Varian selected (tetap tampil setelah dipilih) -->
              <div v-if="selectionStep >= 6" class="mb-4 flex items-center gap-2 text-emerald-400">
                <Icon name="lucide:check" class="text-emerald-500" />
                <span class="font-semibold">{{ heroTerminal.variantPrompt }}</span>
                <span>{{ heroTerminal.selectedVariant }}</span>
              </div>

              <!-- Step 6+: Fetching templates / success -->
              <div v-if="selectionStep >= 6" class="text-brand-muted flex items-center gap-2 mb-4">
                <Icon v-if="!isGenerationCompleted" name="lucide:loader-2" class="animate-spin text-brand-cyan" />
                <Icon v-else name="lucide:check" class="text-emerald-500" />
                <span v-if="!isGenerationCompleted">{{ heroTerminal.fetching.loadingText }}</span>
                <span v-else>{{ heroTerminal.fetching.successText }}</span>
              </div>

              <!-- Step 7+: Generation steps (muncul hanya setelah proses selesai) -->
              <div v-if="isGenerationCompleted" class="space-y-3 mb-6">
                <div class="text-brand-muted flex items-center gap-2">
                  <Icon name="lucide:check" class="text-emerald-500" /> {{ heroTerminal.generationSteps[0] }}
                </div>
                <div class="text-brand-muted flex items-center gap-2">
                  <Icon name="lucide:check" class="text-emerald-500" /> {{ heroTerminal.generationSteps[1] }}
                </div>
              </div>

              <!-- Success panel & final prompt hanya setelah semua step selesai -->
              <div v-if="isGenerationCompleted">
                <div class="p-4 rounded-xl border border-brand-cyanLight bg-slate-900/70">
                  <div class="text-slate-100 font-semibold mb-2">✨ Project created successfully!</div>
                  <div class="text-brand-muted mb-2">Next steps:</div>
                  <div class="pl-4 border-l-2 border-brand-cyanLight space-y-1">
                    <div>cd <span class="font-medium">my-app</span></div>
                    <div>npm <span class="text-brand-cyan">install</span></div>
                    <div>npm run <span class="text-brand-cyan">dev</span></div>
                  </div>
                </div>
                <div class="mt-4 flex items-center">
                  <span class="text-brand-cyan">~/my-app</span>
                  <span class="text-slate-400 ml-1">$</span>
                  <span class="w-2 h-4 bg-brand-cyan ml-2 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useStateHeroSection } from '@/services/useStateHeroSection'

const emit = defineEmits<{
  (e: 'copy-command'): void
}>()

const { heroTerminal, typedCommand, selectionStep, isGenerationCompleted } = useStateHeroSection()
</script>
