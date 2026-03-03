<template>
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
</template>
