<template>
  <footer class="border-t border-brand-border bg-brand-surface">
    <div class="max-w-7xl mx-auto px-6 py-12">
      <div class="flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="flex items-center gap-2">
          <div
            class="w-6 h-6 rounded bg-white border border-brand-border flex items-center justify-center text-brand-cyan"
          >
            <Icon name="lucide:terminal" class="text-xs" />
          </div>
          <span class="font-display font-bold text-brand-dark tracking-tight">rizki-cli</span>
        </div>

        <p class="text-sm text-brand-muted">
          Built by
          <a
            href="https://github.com/rzkir"
            target="_blank"
            class="font-medium text-brand-dark hover:text-brand-cyan transition-colors"
          >
            Rizki Ramadhan
          </a>
          . Open Source.
        </p>

        <div class="flex gap-4">
          <a
            href="https://github.com/rzkir/rizki-cli"
            id="footer-repo"
            target="_blank"
            class="text-slate-400 hover:text-brand-dark transition-colors"
          >
            <span class="sr-only">GitHub Repository</span>
            <Icon name="lucide:github" class="text-xl" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
