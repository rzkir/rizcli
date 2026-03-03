<template>
  <!-- CTA Section -->
  <section class="py-24 px-6 bg-white border-t border-brand-border">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="font-display text-4xl md:text-5xl font-bold tracking-tight text-brand-dark mb-6">
        Ready to speed up your workflow?
      </h2>
      <p class="text-lg text-brand-muted mb-10 max-w-2xl mx-auto">
        Stop repeating the same initial setup. Get your next project running in seconds with Rizki CLI.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          id="cta-bottom-copy"
          class="px-8 py-4 rounded-xl text-base font-semibold bg-brand-dark text-white hover:bg-slate-800 transition-colors shadow-sm flex items-center gap-2 w-full sm:w-auto justify-center"
          @click="emit('copy-command')"
        >
          Copy Command
          <Icon name="lucide:copy" class="text-lg" />
        </button>
        <a
          id="cta-bottom-github"
          href="https://github.com/rzkir/rizki-cli"
          target="_blank"
          class="px-8 py-4 rounded-xl text-base font-medium text-brand-dark bg-white border border-brand-border hover:bg-brand-surface transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
        >
          <Icon name="lucide:star" class="text-lg" />
          Star on GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'copy-command'): void
}>()
</script>
