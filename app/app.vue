<template>
  <div class="bg-white text-brand-dark font-sans relative overflow-x-hidden">
    <!-- Background decorative blur -->
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-brand-cyanLight/40 rounded-full blur-[100px] pointer-events-none -z-10">
    </div>

    <Header />

    <main>
      <!-- Hero Section -->
      <section class="pt-24 pb-20 lg:pt-32 lg:pb-32 px-6 relative">
        <div class="max-w-7xl mx-auto">
          <div class="grid lg:grid-cols-12 gap-16 items-center">
            <!-- Left: Typography -->
            <div class="lg:col-span-6 flex flex-col items-start">
              <div
                class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-border bg-brand-surface mb-8">
                <span class="flex h-2 w-2 relative">
                  <span
                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
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
                    @click="copyCommand">
                    <div class="flex items-center gap-2">
                      <span class="text-brand-cyan font-bold">$</span>
                      <span class="text-brand-dark font-medium">npx rizki-cli create</span>
                    </div>
                    <div class="w-px h-4 bg-brand-border mx-2 hidden sm:block"></div>
                    <Icon
                      name="lucide:copy"
                      class="text-brand-muted group-hover:text-brand-cyan transition-colors"
                    />
                  </button>
                </div>
                <a href="https://github.com/rzkir/rizki-cli" id="hero-docs" target="_blank"
                  class="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-brand-dark bg-brand-surface border border-transparent hover:border-brand-border transition-colors w-full sm:w-auto">
                  View GitHub
                  <iconify-icon icon="lucide:arrow-right" class="text-brand-muted"></iconify-icon>
                </a>
              </div>
            </div>

            <!-- Right: Light Terminal Showcase -->
            <div class="lg:col-span-6 relative w-full max-w-[600px] mx-auto lg:mx-0">
              <!-- Decorative offset background -->
              <div
                class="absolute inset-0 bg-brand-surface rounded-2xl transform translate-x-4 translate-y-4 border border-brand-border/50 -z-10">
              </div>

              <!-- Terminal Window -->
              <div
                class="rounded-2xl bg-white border border-brand-border shadow-soft overflow-hidden flex flex-col h-full">
                <!-- Header -->
                <div
                  class="flex items-center px-4 py-3 border-b border-brand-border bg-brand-surface/50 backdrop-blur-sm">
                  <div class="flex space-x-2">
                    <div class="w-3 h-3 rounded-full border border-slate-300 bg-slate-200"></div>
                    <div class="w-3 h-3 rounded-full border border-slate-300 bg-slate-200"></div>
                    <div class="w-3 h-3 rounded-full border border-slate-300 bg-slate-200"></div>
                  </div>
                  <div class="mx-auto text-xs text-brand-muted font-medium font-sans flex items-center gap-1.5">
                    <iconify-icon icon="lucide:terminal" class="text-slate-400"></iconify-icon> rizki-cli
                  </div>
                </div>
                <!-- Body -->
                <div
                  class="p-6 font-mono text-[13px] sm:text-sm leading-relaxed text-brand-dark min-h-[340px] bg-white">
                  <div class="mb-4">
                    <span class="text-brand-cyan">~</span>
                    <span class="text-slate-400">$</span>
                    npx rizki-cli <span class="text-brand-cyan">create</span> my-app
                  </div>
                  <div class="text-brand-muted flex items-center gap-2 mb-2">
                    <Icon name="lucide:loader-2" class="animate-spin text-brand-cyan" /> Fetching templates...
                  </div>
                  <div class="mb-4">
                    <span class="text-brand-cyan font-bold">?</span>
                    Select a template: <span class="text-brand-cyan font-medium">php-native</span>
                  </div>
                  <div class="space-y-1 mb-6">
                    <div class="text-brand-muted flex items-center gap-2">
                      <Icon name="lucide:check" class="text-emerald-500" /> Downloaded template structure
                    </div>
                    <div class="text-brand-muted flex items-center gap-2">
                      <Icon name="lucide:check" class="text-emerald-500" /> Initialized git repository
                    </div>
                  </div>
                  <div class="p-4 rounded-xl border border-brand-cyanLight bg-cyan-50/50">
                    <div class="text-brand-dark font-semibold mb-2">✨ Project created successfully!</div>
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
                    <span class="w-2 h-4 bg-brand-cyan ml-2 animate-pulse"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Logos / Tech Stack -->
      <section class="py-10 border-y border-brand-border bg-brand-surface">
        <div class="max-w-7xl mx-auto px-6">
          <p class="text-center text-sm font-medium text-brand-muted mb-6 uppercase tracking-wider">
            Build with your favorite tools
          </p>
          <div
            class="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <Icon name="logos:php" class="text-3xl md:text-4xl transition-transform hover:scale-110" />
            <Icon name="logos:nodejs-icon" class="text-3xl md:text-4xl transition-transform hover:scale-110" />
            <Icon name="logos:react" class="text-3xl md:text-4xl transition-transform hover:scale-110" />
            <Icon name="logos:tailwindcss-icon" class="text-3xl md:text-4xl transition-transform hover:scale-110" />
            <Icon name="logos:typescript-icon" class="text-3xl md:text-4xl transition-transform hover:scale-110" />
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section id="features" class="py-24 px-6 relative bg-white">
        <div class="max-w-7xl mx-auto">
          <div class="text-center max-w-2xl mx-auto mb-16">
            <h2 class="font-display text-3xl md:text-4xl font-bold mb-4 text-brand-dark">Why use Rizki CLI?</h2>
            <p class="text-brand-muted text-lg">
              Designed to remove the friction of starting new projects. Focus on writing business logic, not
              configuration files.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Card 1 -->
            <div
              class="bg-brand-surface border border-brand-border rounded-2xl p-8 hover:shadow-soft hover:border-brand-cyan/30 transition-all duration-300 group">
              <div
                class="w-12 h-12 rounded-xl bg-white border border-brand-border flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Icon name="lucide:zap" class="text-2xl text-brand-cyan" />
              </div>
              <h3 class="font-display text-xl font-bold mb-3 text-brand-dark">Zero Config Setup</h3>
              <p class="text-brand-muted leading-relaxed">
                Stop wasting hours configuring Webpack, ESLint, or folder structures. Run one command and your dev
                environment is ready instantly.
              </p>
            </div>

            <!-- Card 2 -->
            <div
              class="bg-brand-surface border border-brand-border rounded-2xl p-8 hover:shadow-soft hover:border-brand-cyan/30 transition-all duration-300 group">
              <div
                class="w-12 h-12 rounded-xl bg-white border border-brand-border flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Icon name="lucide:layers" class="text-2xl text-brand-cyan" />
              </div>
              <h3 class="font-display text-xl font-bold mb-3 text-brand-dark">Curated Templates</h3>
              <p class="text-brand-muted leading-relaxed">
                Choose from a selection of hand-crafted templates. From simple Native setups to modern API
                architectures.
              </p>
            </div>

            <!-- Card 3 -->
            <div
              class="bg-brand-surface border border-brand-border rounded-2xl p-8 hover:shadow-soft hover:border-brand-cyan/30 transition-all duration-300 group">
              <div
                class="w-12 h-12 rounded-xl bg-white border border-brand-border flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Icon name="lucide:github" class="text-2xl text-brand-cyan" />
              </div>
              <h3 class="font-display text-xl font-bold mb-3 text-brand-dark">Open Source</h3>
              <p class="text-brand-muted leading-relaxed">
                Transparent and free forever. View how templates are built, contribute your own, or customize it for
                your
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- How it Works / Quick Start -->
      <section id="how-it-works" class="py-24 px-6 bg-slate-50 border-t border-brand-border relative overflow-hidden">
        <div class="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

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
                    <div class="w-px h-full bg-brand-border mt-2"></div>
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
                    <div class="w-px h-full bg-brand-border mt-2"></div>
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
              @click="copyCommand"
            >
              Copy Command
              <Icon name="lucide:copy" class="text-lg" />
            </button>
            <a
              href="https://github.com/rzkir/rizki-cli"
              id="cta-bottom-github"
              target="_blank"
              class="px-8 py-4 rounded-xl text-base font-medium text-brand-dark bg-white border border-brand-border hover:bg-brand-surface transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Icon name="lucide:star" class="text-lg" />
              Star on GitHub
            </a>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const copyCommand = () => {
  if (typeof navigator !== 'undefined' && navigator.clipboard) {
    navigator.clipboard.writeText('npx rizki-cli create')
  }
}
</script>
