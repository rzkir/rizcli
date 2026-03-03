<template>
  <!-- How it Works / Quick Start -->
  <section id="how-it-works" ref="sectionRef"
    class="py-10 md:py-24 px-4 md:px-6 bg-slate-50 border-t border-brand-border relative overflow-hidden">
    <div class="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <h2 class="font-display text-3xl md:text-4xl font-bold mb-6 text-brand-dark">
            {{ howItWorksSection.titlePrefix }}
            <span class="text-brand-cyan">{{ howItWorksSection.titleHighlight }}</span>
          </h2>
          <p class="text-brand-muted text-lg mb-8">
            {{ howItWorksSection.description }}
          </p>

          <div class="space-y-6">
            <div v-for="(step, index) in howItWorksSteps" :key="step.title" class="flex gap-4">
              <div class="flex flex-col items-center">
                <div
                  class="w-8 h-8 rounded-full border shadow-sm flex items-center justify-center font-mono text-sm font-bold shrink-0 transition-colors duration-300"
                  :class="index === activeStepIndex
                    ? 'bg-brand-cyan text-white border-brand-cyan'
                    : 'bg-white text-brand-cyan border-brand-border'
                    ">
                  {{ index + 1 }}
                </div>
                <div v-if="index !== howItWorksSteps.length - 1" class="w-px h-full mt-2 transition-colors duration-300"
                  :class="index < activeStepIndex ? 'bg-brand-cyan' : 'bg-brand-border'" />
              </div>

              <div class="pb-4">
                <h4 class="text-lg font-bold mb-1 transition-colors duration-300"
                  :class="index === activeStepIndex ? 'text-brand-dark' : 'text-brand-dark/80'">
                  {{ step.title }}
                </h4>
                <p class="text-brand-muted transition-colors duration-300"
                  :class="index === activeStepIndex ? 'text-brand-muted' : 'text-brand-muted/90'">
                  {{ step.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Code Block -->
        <div class="relative w-full max-w-full lg:max-w-[600px] mx-auto lg:mx-0">
          <!-- Decorative offset background -->
          <div
            class="absolute inset-0 bg-brand-surface rounded-2xl transform translate-x-3 translate-y-3 border border-brand-border/50 -z-10" />

          <!-- Terminal-style window -->
          <div class="rounded-2xl bg-slate-950 border border-brand-border shadow-soft overflow-hidden">
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
              <div class="mx-auto text-xs text-slate-400 font-medium font-sans">
                {{ howItWorksSection.terminalTitle }}
              </div>
            </div>

            <!-- Body -->
            <div class="p-6 font-mono text-sm leading-8 overflow-x-auto text-slate-100 bg-slate-950">
              <div v-for="(cmd, index) in quickStart" :key="index" class="mb-6 last:mb-0 transition-all duration-500"
                :class="index <= activeStepIndex ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'">
                <div class="text-slate-500 mb-1">
                  <template v-if="index === 1">
                    {{ howItWorksSteps[1]?.title ?? '' }}
                  </template>

                  <template v-else-if="index === 2">
                    {{ howItWorksSteps[2]?.title ?? '' }}
                  </template>
                  <template v-else>
                    {{ cmd?.label ?? '' }}
                  </template>
                </div>

                <!-- Baris perintah / konten utama untuk tiap step -->
                <div v-if="index === 0" class="flex items-center">
                  <span class="text-brand-cyan mr-3">$</span>
                  <span>
                    <template v-if="index === activeStepIndex">
                      {{ typedCommands[index] }}
                    </template>
                    <template v-else>
                      {{ cmd.textBefore }}
                      <span v-if="cmd.highlight" class="text-brand-cyan">{{ cmd.highlight }}</span>
                      {{ cmd.textAfter }}
                    </template>
                  </span>
                  <span v-if="index === activeStepIndex" class="w-2 h-4 bg-brand-cyan animate-pulse" />
                </div>

                <!-- Step kedua: saat aktif tampilkan proses memilih, setelah itu tampilkan hasil saja -->
                <div v-if="index === 1 && activeStepIndex >= 1" class="mt-4 text-slate-300 text-sm">
                  <!-- Saat masih di step 2: tampilkan daftar pilihan -->
                  <div v-if="activeStepIndex === 1" class="space-y-3">
                    <!-- Pilih template -->
                    <div>
                      <span class="font-semibold">{{ heroTerminal.templatePrompt }}</span>
                    </div>

                    <div v-for="(template, tIndex) in heroTerminal.templates" :key="template"
                      class="flex items-center gap-2 text-slate-400">
                      <span v-if="selectionStep >= 2 && template === heroTerminal.selectedTemplate"
                        class="text-brand-cyan">
                        ➜
                      </span>
                      <span v-else class="w-3" />
                      <span :class="selectionStep >= 2 && template === heroTerminal.selectedTemplate
                        ? 'text-brand-cyan font-semibold'
                        : ''
                        ">
                        {{ tIndex + 1 }}) {{ template }}
                      </span>
                    </div>

                    <!-- Pilih varian -->
                    <div v-if="selectionStep >= 2" class="mt-3 space-y-2">
                      <div>
                        <span class="font-semibold">
                          {{ heroTerminal.variantPrompt }}
                        </span>
                      </div>

                      <div v-for="(variant, vIndex) in heroTerminal.variants" :key="variant"
                        class="flex items-center gap-2 text-slate-400">
                        <span v-if="selectionStep >= 3 && variant === heroTerminal.selectedVariant"
                          class="text-brand-cyan">
                          ➜
                        </span>
                        <span v-else class="w-3" />
                        <span :class="selectionStep >= 3 && variant === heroTerminal.selectedVariant
                          ? 'text-brand-cyan font-semibold'
                          : ''
                          ">
                          {{ vIndex + 1 }}) {{ variant }}
                        </span>
                      </div>
                    </div>
                  </div>

                  <!-- Setelah lanjut ke step 3: tampilkan hasil saja dengan ceklis -->
                  <div v-else class="space-y-4 text-brand-muted">
                    <div>
                      <span class="text-emerald-400 mr-1">✔</span>
                      <span class="font-semibold text-emerald-400">Template:</span>
                      <span class="ml-1">{{ heroTerminal.selectedTemplate }}</span>
                    </div>
                    <div>
                      <span class="text-emerald-400 mr-1">✔</span>
                      <span class="font-semibold text-emerald-400">Variant:</span>
                      <span class="ml-1">{{ heroTerminal.selectedVariant }}</span>
                    </div>
                  </div>
                </div>

                <!-- Step ketiga: tampilkan panel sukses & next steps seperti di HeroSection -->
                <div v-if="index === 2 && index === activeStepIndex" class="mt-2 text-slate-300 space-y-4 text-sm">
                  <div class="p-4 rounded-xl border border-brand-cyanLight bg-slate-900/70">
                    <div class="text-slate-100 font-semibold mb-2">✨ Project created successfully!</div>
                    <div class="text-brand-cyan mb-2">Next steps:</div>
                    <div class="pl-4 border-l-2 border-brand-cyanLight space-y-1">
                      <div>
                        cd <span class="font-medium">&lt;project-name&gt;</span>
                      </div>
                      <div>
                        npm <span class="text-brand-cyan">install</span>
                      </div>
                      <div>
                        npm run <span class="text-brand-cyan">dev</span>
                      </div>
                    </div>
                  </div>
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
import { useStateHiw } from '@/services/useStateHiw'

const {
  howItWorksSection,
  howItWorksSteps,
  quickStart,
  heroTerminal,
  activeStepIndex,
  typedCommands,
  selectionStep,
  sectionRef,
} = useStateHiw()
</script>
