<template>
  <header class="sticky top-0 left-0 right-0 z-50 glass-nav border-b border-brand-border">
    <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <a id="nav-logo" href="#" class="flex items-center gap-2 group">
        <div
          class="w-8 h-8 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center text-brand-cyan group-hover:border-brand-cyan transition-colors"
        >
          <Icon name="lucide:terminal" class="text-lg" />
        </div>
        <span class="font-display font-bold text-xl tracking-tight text-brand-dark">rizki-cli</span>
      </a>

      <nav class="hidden md:flex items-center gap-8">
        <a
          id="nav-features"
          href="#features"
          class="text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors"
        >
          Features
        </a>
        <a
          id="nav-how"
          href="#how-it-works"
          class="text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors"
        >
          How it works
        </a>
        <a
          id="nav-templates"
          href="#templates"
          class="text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors"
        >
          Templates
        </a>
      </nav>

      <div class="flex items-center gap-4">
        <a
          id="nav-github"
          href="https://github.com/rzkir/rizki-cli"
          target="_blank"
          class="text-brand-muted hover:text-brand-dark transition-colors flex items-center justify-center w-9 h-9 rounded-md hover:bg-brand-surface"
        >
          <Icon name="lucide:github" class="text-xl" />
        </a>
        <a
          id="nav-cta"
          href="#how-it-works"
          class="hidden sm:flex items-center gap-2 bg-brand-dark text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm"
        >
          Get Started
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
/* eslint-disable vue/multi-word-component-names */
</script>