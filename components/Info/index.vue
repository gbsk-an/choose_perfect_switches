<template>
  <div class="info">
    <div class="info-text">
      <p>
        Выбор свитчей крайне важен, поскольку это влияет не только на результативность работы, но и комфорт при
        использовании клавиатуры.
      </p>
      <p>
        Проблема в том, что существует множество видов свитчей, поэтому довольно трудно решить какие именно подойдут
        тебе.
      </p>
      <p>К счастью, я провела исследование и создала этот тест для тебя :)</p>
      <p>После завершения теста вы узнаете какие свитчи лучше всего подходят именно вам.</p>
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
    text: 'Лучший выбор для игр. Эти свитчи работают плавно, без отдачи или тактильной обратной связи. Linear switches могут издавать тихий щелчок, когда клавиша достигает нижней точки, или вообще не издавать звука.'
  },
  {
    id: 2,
    image: {
      src: images['typing-2'],
      alt: 'Girl and computer'
    },
    title: 'Tactile switches',
    text: 'Эти свитчи подходят как для набора текста, так и для игр. При нажатии вы чувствуете отчетливый толчок в середине нажатия. Обычно они не являются бесшумными, но щелчок не такой громкий, как у кликающих Clicky switches.'
  },
  {
    id: 3,
    image: {
      src: images['typing-3'],
      alt: 'Keyboard typing'
    },
    title: 'Clicky switches',
    text: 'Отлично подходят для набора текста. Они похожи на тактильные свитчи, но издают намного больше шума, когда клавиша достигает нижней точки.'
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

  @include tablet-desktop {
    padding: 20rem 6rem 10rem;
    row-gap: 30rem;
  }

  @include mobile {
    padding: 10rem 1.6rem 6rem;
    row-gap: 8rem;
  }

  &-text {
    position: relative;

    &::before {
      position: absolute;
      z-index: 1;
      right: 0;
      left: 0;
      margin-right: auto;
      margin-left: auto;
      background-image: url('@/assets/images/gif/dog.webp');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      content: '';
    }

    @include tablet-desktop {
      margin: 0 10rem;

      &::before {
        top: -4rem;
        width: 6rem;
        height: 6rem;
      }
    }

    @include mobile {
      &::before {
        top: -3rem;
        width: 4rem;
        height: 4rem;
      }
    }
  }

  p {
    font-family: Compaq;
    line-height: 150%;
    text-align: center;
    @include adaptive-font(2, 1.4);
  }
}
</style>
