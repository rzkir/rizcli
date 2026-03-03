<template>
  <div class="bg-white text-brand-dark font-sans relative overflow-x-hidden">
    <!-- Background decorative blur -->
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-brand-cyanLight/40 rounded-full blur-[100px] pointer-events-none -z-10" />

    <Header />

    <main>
      <HeroSection @copy-command="copyCommand" />
      <TechStack />
      <Features />
      <Hiw />
      <GetStarted @copy-command="copyCommand" />
    </main>

    <Footer />

    <!-- Copy toast -->
    <transition name="fade">
      <div v-if="showCopyToast" class="fixed inset-x-0 top-6 flex justify-center z-50">
        <div
          class="inline-flex items-center gap-2 rounded-xl bg-white text-brand-dark px-2 py-2 text-sm shadow-lg border border-brand-border/40">
          <Icon name="lucide:check" class="text-emerald-400" />
          <span>Command copied to clipboard</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import HeroSection from './components/ui/HeroSection.vue'
import GetStarted from './components/ui/GetStarted.vue'
import Hiw from './components/ui/Hiw.vue'
import Features from './components/ui/Features.vue'
import TechStack from './components/ui/TechStack.vue'

const showCopyToast = ref(false)

const copyCommand = () => {
  if (typeof navigator !== 'undefined' && navigator.clipboard) {
    navigator.clipboard.writeText('npx rizki-cli create')
  }

  showCopyToast.value = true
  setTimeout(() => {
    showCopyToast.value = false
  }, 2000)
}
</script>
