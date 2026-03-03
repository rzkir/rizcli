import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import data from "@/assets/data/data.json";

export const useStateHeroSection = () => {
  const heroTerminal = data.heroTerminal;

  const fullCommand = heroTerminal.command;
  const typedCommand = ref("");

  const selectionStep = ref(0);

  let typingInterval: number | undefined;
  let selectionTimeout: number | undefined;

  const isGenerationCompleted = computed(() => selectionStep.value >= 7);

  const startSelectionAnimation = () => {
    const delays = [900, 700, 900, 900, 1500, 1300, 900];
    let index = 0;

    const advance = () => {
      if (index < delays.length) {
        selectionStep.value = index + 1;
        selectionTimeout = window.setTimeout(advance, delays[index]);
        index++;
      }
    };

    advance();
  };

  onMounted(() => {
    let index = 0;

    typingInterval = window.setInterval(() => {
      if (index <= fullCommand.length) {
        typedCommand.value = fullCommand.slice(0, index);
        index++;
      } else {
        if (typingInterval !== undefined) {
          clearInterval(typingInterval);
        }
        startSelectionAnimation();
      }
    }, 80);
  });

  onBeforeUnmount(() => {
    if (typingInterval !== undefined) {
      clearInterval(typingInterval);
    }
    if (selectionTimeout !== undefined) {
      clearTimeout(selectionTimeout);
    }
  });

  return {
    heroTerminal,
    typedCommand,
    selectionStep,
    isGenerationCompleted,
  };
};
