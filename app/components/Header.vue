<template>
  <!-- eslint-disable vue/multi-word-component-names -->
  <header class="fixed top-0 left-0 right-0 z-50 glass-nav">
    <div class="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
      <a id="nav-logo" href="#" class="flex items-center gap-2 group">
        <div
          class="w-8 h-8 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center text-brand-cyan group-hover:border-brand-cyan transition-colors">
          <Icon name="lucide:terminal" class="text-lg" />
        </div>
        <span class="font-display font-bold text-xl tracking-tight text-brand-dark">rizki-cli</span>
      </a>

      <nav class="hidden md:flex items-center gap-8">
        <a href="/" :class="[
          'text-sm font-medium transition-colors',
          isActive() ? 'text-brand-cyan' : 'text-brand-muted hover:text-brand-cyan'
        ]">
          Home
        </a>

        <a href="/#features" :class="[
          'text-sm font-medium transition-colors',
          isActive('#features') ? 'text-brand-cyan' : 'text-brand-muted hover:text-brand-cyan'
        ]">
          Features
        </a>

        <a href="/#how-it-works" :class="[
          'text-sm font-medium transition-colors',
          isActive('#how-it-works') ? 'text-brand-cyan' : 'text-brand-muted hover:text-brand-cyan'
        ]">
          How it works
        </a>

        <a href="/#get-started" :class="[
          'text-sm font-medium transition-colors',
          isActive('#get-started') ? 'text-brand-cyan' : 'text-brand-muted hover:text-brand-cyan'
        ]">
          Templates
        </a>
      </nav>

      <div class="flex items-center gap-4">
        <a href="https://github.com/rzkir/rizki-cli" target="_blank"
          class="flex text-brand-muted hover:text-brand-dark transition-colors items-center justify-center w-9 h-9 rounded-md hover:bg-brand-surface">
          <Icon name="lucide:github" class="text-xl" />
        </a>

        <a href="/#get-started"
          class="hidden sm:flex items-center gap-2 bg-brand-dark text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm">
          Get Started
        </a>

        <button type="button"
          class="inline-flex items-center justify-center w-9 h-9 rounded-md border border-brand-border text-brand-muted hover:text-brand-dark hover:bg-brand-surface md:hidden"
          @click="isMenuOpen = !isMenuOpen" aria-label="Toggle navigation">
          <Icon v-if="!isMenuOpen" name="lucide:menu" class="text-xl" />
          <Icon v-else name="lucide:x" class="text-xl" />
        </button>
      </div>
    </div>

    <transition name="fade">
      <div v-if="isMenuOpen" class="md:hidden fixed inset-x-0 top-16 z-40 px-4 pb-4">
        <div class="rounded-xl border border-brand-border bg-white shadow-soft py-3">
          <nav class="flex flex-col gap-1">
            <a
              href="/"
              :class="[
                'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                isActive() ? 'text-brand-cyan bg-brand-surface' : 'text-brand-muted hover:text-brand-cyan hover:bg-brand-surface'
              ]"
              @click="isMenuOpen = false">
              Home
            </a>
            <a
              href="/#features"
              :class="[
                'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                isActive('#features') ? 'text-brand-cyan bg-brand-surface' : 'text-brand-muted hover:text-brand-cyan hover:bg-brand-surface'
              ]"
              @click="isMenuOpen = false">
              Features
            </a>
            <a
              href="/#how-it-works"
              :class="[
                'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                isActive('#how-it-works') ? 'text-brand-cyan bg-brand-surface' : 'text-brand-muted hover:text-brand-cyan hover:bg-brand-surface'
              ]"
              @click="isMenuOpen = false">
              How it works
            </a>
            <a
              href="/#get-started"
              :class="[
                'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                isActive('#get-started') ? 'text-brand-cyan bg-brand-surface' : 'text-brand-muted hover:text-brand-cyan hover:bg-brand-surface'
              ]"
              @click="isMenuOpen = false">
              Templates
            </a>
          </nav>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)
const route = useRoute()

const isActive = (hash?: string) => {
  if (hash) {
    return route.hash === hash
  }

  return route.path === '/' && !route.hash
}
</script>