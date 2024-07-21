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
      <h1 class="banner-content__title">Какие свитчи для механической&nbsp;клавиатуры<br />подойдут именно вам?</h1>
      <v-button text="Начать" @click="setQuestion(Question.QuestionType.COLOR)" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted } from 'vue'
import { useElementVisibility } from '@vueuse/core'
import { filename } from 'pathe/utils'
import useTestStore from '@/store/test.ts'
import { Question } from '@/types/index.ts'

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
      @include adaptive-font(3, 1.6);
    }
  }
}
</style>
