<template>
  <div ref="target" class="banner">
    <img
      v-for="(layer, index) in backgroundLayers"
      ref="layersImage"
      :key="index"
      class="banner-layer"
      :class="`banner-layer-${index}`"
      :src="layer.image"
      :alt="`Слой фона ${index}`"
    />
    <div class="banner-content">
      <h1 class="banner-content__title" :class="{ large: isStartSection }" v-html="title" />
      <v-button v-if="isStartSection" text="Начать" @click="setQuestion(Question.QuestionType.USAGE)" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { onBeforeUnmount, onMounted, computed } from 'vue'
import { useElementVisibility } from '@vueuse/core'
import { filename } from 'pathe/utils'
import useTestStore from '@/store/test.ts'
import { Question } from '@/types/index.ts'

interface Props {
  title: string
}

defineProps<Props>()

const { question } = storeToRefs(useTestStore())
const { setQuestion } = useTestStore()

const layersImage = ref<HTMLElement | null>(null)
const target = ref<HTMLElement | null>(null)
const targetIsVisible = useElementVisibility(target)

const imagesGlobal = import.meta.glob('@img/background/*', { eager: true })
const images = Object.fromEntries(Object.entries(imagesGlobal).map(([key, value]) => [filename(key), value.default]))

const backgroundLayers = [
  {
    image: images['layer-0'],
    transform: 0.8
  },
  {
    image: images['layer-1'],
    transform: 0.6
  },
  {
    image: images['layer-2'],
    transform: 0.3
  },
  {
    image: images['layer-3']
  }
]

const isStartSection = computed(() => question.value === Question.QuestionType.START)

const onWindowScroll = () => {
  if (!targetIsVisible.value) return

  const scrolled = window.pageYOffset

  layersImage.value.forEach((item, index) => {
    if (!backgroundLayers[index].transform) return

    // eslint-disable-next-line no-param-reassign
    item.style.transform = `translateY(${scrolled * backgroundLayers[index].transform}px`
  })
}

onMounted(() => {
  window.addEventListener('scroll', onWindowScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onWindowScroll)
})
</script>

<style lang="scss" scoped>
$yellow: $YELLOW;
$black-2: $BLACK-SECOND;
$blue-dark: $BLUE-DARK;

.banner {
  position: relative;
  z-index: 0;
  display: flex;
  overflow: hidden;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: $blue-dark;

  @include tablet-desktop {
    height: 100vh;
  }

  @include mobile {
    height: 60vh;
  }

  &-layer {
    position: absolute;
    bottom: 0;
    width: 100%;

    &-0 {
      z-index: 0;

      @include mobile-tablet {
        height: 100%;
        object-fit: cover;
      }
    }

    &-1 {
      z-index: 1;
    }

    &-2 {
      z-index: 2;
    }

    &-3 {
      z-index: 3;
    }
  }

  &-content {
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;

    @include desktop {
      row-gap: 4rem;
    }

    @include mobile-tablet {
      row-gap: 2rem;
    }

    &__title {
      font-family: Compaq;
      font-weight: 400;
      line-height: 150%;
      text-align: center;
      text-shadow: $black-2 0.3rem 0.4rem;
      text-transform: uppercase;

      @include tablet-desktop {
        overflow: hidden;
        padding-right: 1rem;
        border-right: 0.4rem solid $yellow;
        animation: typing 3.5s steps(30, end), blink-caret 1.2s step-end infinite;
        white-space: nowrap;
      }

      &:not(.large) {
        @include adaptive-font(2.2, 1.6);
      }

      &.large {
        @include adaptive-font(3, 1.6);
      }
    }
  }
}

@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  0%,
  100% {
    border-color: transparent;
  }

  50% {
    border-color: $yellow;
  }
}
</style>
