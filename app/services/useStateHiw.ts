import { onBeforeUnmount, onMounted, ref } from 'vue'
import data from '@/assets/data/data.json'

export function useStateHiw() {
  const howItWorksSection = data.howItWorksSection
  const howItWorksSteps = data.howItWorksSteps
  const quickStart = data.quickStart
  const heroTerminal = data.heroTerminal
  const howItWorksConfig = data.howItWorksConfig

  const activeStepIndex = ref(0)
  const typedCommands = ref<string[]>(quickStart.map(() => ''))
  // 0: belum mulai, 1: list template, 2: template terpilih, 3: varian terpilih
  const selectionStep = ref(0)

  const sectionRef = ref<HTMLElement | null>(null)

  let quickInterval: number | undefined
  let typingInterval: number | undefined
  let selectionTimeout1: number | undefined
  let selectionTimeout2: number | undefined
  let observer: IntersectionObserver | null = null

  const buildCommandText = (index: number) => {
    const cmd = quickStart[index]

    if (!cmd) {
      return ''
    }

    return `${cmd.textBefore}${cmd.highlight ?? ''}${cmd.textAfter}`
  }

  const startTypingForStep = (index: number) => {
    if (typingInterval !== undefined) {
      window.clearInterval(typingInterval)
      typingInterval = undefined
    }

    const full = buildCommandText(index)
    let i = 0
    typedCommands.value[index] = ''

    typingInterval = window.setInterval(() => {
      if (i <= full.length) {
        typedCommands.value[index] = full.slice(0, i)
        i += 1
      } else if (typingInterval !== undefined) {
        window.clearInterval(typingInterval)
        typingInterval = undefined
      }
    }, howItWorksConfig.typingSpeedMs)
  }

  const startSequence = () => {
    if (quickInterval !== undefined) return

    const maxIndex = howItWorksSteps.length - 1

    // Hanya step pertama yang menggunakan efek typing,
    // step berikutnya menampilkan pilihan template & next steps seperti di HeroSection
    startTypingForStep(0)

    quickInterval = window.setInterval(() => {
      if (activeStepIndex.value < maxIndex) {
        activeStepIndex.value += 1
        // Saat masuk ke step 2, jalankan animasi pilih template -> varian
        if (activeStepIndex.value === 1) {
          selectionStep.value = 1
          // Tampilkan list template dulu, lalu animasi template terpilih, lalu animasi varian terpilih
          selectionTimeout1 = window.setTimeout(() => {
            selectionStep.value = 2
            selectionTimeout2 = window.setTimeout(() => {
              selectionStep.value = 3
            }, howItWorksConfig.stepIntervalMs / 3)
          }, howItWorksConfig.stepIntervalMs / 3)
        }
      } else if (quickInterval !== undefined) {
        window.clearInterval(quickInterval)
        quickInterval = undefined
      }
    }, howItWorksConfig.stepIntervalMs)
  }

  onMounted(() => {
    if (sectionRef.value) {
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0]
          if (!entry) return

          if (entry.isIntersecting) {
            startSequence()
            if (observer) {
              observer.disconnect()
              observer = null
            }
          }
        },
        {
          threshold: howItWorksConfig.observerThreshold,
        },
      )

      observer.observe(sectionRef.value)
    }
  })

  onBeforeUnmount(() => {
    if (quickInterval !== undefined) {
      window.clearInterval(quickInterval)
    }
    if (typingInterval !== undefined) {
      window.clearInterval(typingInterval)
    }
    if (selectionTimeout1 !== undefined) {
      window.clearTimeout(selectionTimeout1)
    }
    if (selectionTimeout2 !== undefined) {
      window.clearTimeout(selectionTimeout2)
    }
    if (observer) {
      observer.disconnect()
      observer = null
    }
  })

  return {
    howItWorksSection,
    howItWorksSteps,
    quickStart,
    heroTerminal,
    howItWorksConfig,
    activeStepIndex,
    typedCommands,
    selectionStep,
    sectionRef,
  }
}
