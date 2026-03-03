<template>
  <!-- eslint-disable vue/multi-word-component-names -->
  <header class="sticky top-0 left-0 right-0 z-50 glass-nav">
    <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <a id="nav-logo" href="#" class="flex items-center gap-2 group">
        <div
          class="w-8 h-8 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center text-brand-cyan group-hover:border-brand-cyan transition-colors">
          <Icon name="lucide:terminal" class="text-lg" />
        </div>
        <span class="font-display font-bold text-xl tracking-tight text-brand-dark">rizki-cli</span>
      </a>

      <nav class="hidden md:flex items-center gap-8">
        <NuxtLink to="/" class="text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors">
          Features
        </NuxtLink>

        <NuxtLink to="#how-it-works"
          class="text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors">
          How it works
        </NuxtLink>

        <NuxtLink to="#" class="text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors">
          Templates
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-4">
        <NuxtLink to="https://github.com/rzkir/rizki-cli" target="_blank"
          class="text-brand-muted hover:text-brand-dark transition-colors flex items-center justify-center w-9 h-9 rounded-md hover:bg-brand-surface">
          <Icon name="lucide:github" class="text-xl" />
        </NuxtLink>
        <NuxtLink to="#how-it-works"
          class="hidden sm:flex items-center gap-2 bg-brand-dark text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm">
          Get Started
        </NuxtLink>
      </div>
    </div>
  </header>
</template>