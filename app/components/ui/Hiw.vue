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
            <div class="flex gap-4">
              <div class="flex flex-col items-center">
                <div
                  class="w-8 h-8 rounded-full bg-white border border-brand-border shadow-sm flex items-center justify-center text-brand-cyan font-mono text-sm font-bold shrink-0">
                  1
                </div>
                <div class="w-px h-full bg-brand-border mt-2" />
              </div>
              <div class="pb-4">
                <h4 class="text-lg font-bold text-brand-dark mb-1">Run the command</h4>
                <p class="text-brand-muted">Execute the CLI via NPX in your desired directory.</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex flex-col items-center">
                <div
                  class="w-8 h-8 rounded-full bg-white border border-brand-border shadow-sm flex items-center justify-center text-brand-cyan font-mono text-sm font-bold shrink-0">
                  2
                </div>
                <div class="w-px h-full bg-brand-border mt-2" />
              </div>
              <div class="pb-4">
                <h4 class="text-lg font-bold text-brand-dark mb-1">Select a template</h4>
                <p class="text-brand-muted">Choose from the interactive prompt list.</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex flex-col items-center">
                <div
                  class="w-8 h-8 rounded-full bg-white border border-brand-border shadow-sm flex items-center justify-center text-brand-cyan font-mono text-sm font-bold shrink-0">
                  3
                </div>
              </div>
              <div>
                <h4 class="text-lg font-bold text-brand-dark mb-1">Start coding</h4>
                <p class="text-brand-muted">Your project is ready. Open it in your editor.</p>
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
              <div class="text-slate-400 mb-1"># Execute CLI</div>
              <div class="flex mb-6">
                <span class="text-brand-cyan mr-3">$</span>
                <span>npx rizki-cli create <span class="text-indigo-600">&lt;project-name&gt;</span></span>
              </div>

              <div class="text-slate-400 mb-1"># Navigate to directory</div>
              <div class="flex mb-6">
                <span class="text-brand-cyan mr-3">$</span>
                <span>cd <span class="text-indigo-600">&lt;project-name&gt;</span></span>
              </div>

              <div class="text-slate-400 mb-1"># Open in VS Code</div>
              <div class="flex">
                <span class="text-brand-cyan mr-3">$</span>
                <span>code .</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
