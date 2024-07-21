<template>
  <div class="info">
    <div>
      <p>
        When choosing your switches, you only want the best. The problem is that there are many kinds of switches and
        there’s no easy way to learn and compare them.
      </p>
      <p>Luckily, I’ve done the research and created this test for you!</p>
      <p>After you finish the test, you'll be able to choose the ones that are best for you.</p>
    </div>
    <InfoList :list="switchesInfo" />
  </div>
</template>

<script lang="ts" setup>
import { filename } from 'pathe/utils'

const imagesGlobal = import.meta.glob('@img/gif/*', { eager: true })
const images = Object.fromEntries(Object.entries(imagesGlobal).map(([key, value]) => [filename(key), value.default]))

const switchesInfo = [
  {
    id: 1,
    image: {
      src: images['typing-1'],
      alt: 'Keyboard typing'
    },
    title: 'Linear switches',
    text: 'Linear switches are the best choice for gaming. These switches operate smoothly with no pushback or tactile feedback. Linear switches can provide a quiet clicking sound when they bottom out for no sound.'
  },
  {
    id: 2,
    image: {
      src: images['typing-2'],
      alt: 'Girl and computer'
    },
    title: 'Tactile switches',
    text: 'These switches are suitable for both typing and gaming. When you push down, you feel a distinct bump in the middle of the press. They usually aren’t silent, but the click isn’t as loud as a clicky switch.'
  },
  {
    id: 3,
    image: {
      src: images['typing-3'],
      alt: 'Keyboard typing'
    },
    title: 'Clicky switches',
    text: 'Clicky switches are great for typing. These are like tactile switches but make much more noise when they bottom out.'
  }
]
</script>

<style lang="scss" scoped>
$white: $WHITE;
$yellow: $YELLOW;
$black-2: $BLACK-SECOND;

.info {
  display: flex;
  flex-direction: column;
  row-gap: 4rem;

  @include tablet-desktop {
    padding: 6rem;
  }

  @include mobile {
    padding: 2rem 1.6rem 6rem;
  }

  p {
    font-family: EpilepsySans;
    @include adaptive-font(2, 1.4);
    line-height: 140%;
  }
}
</style>
