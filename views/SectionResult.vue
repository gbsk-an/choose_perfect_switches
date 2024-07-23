<template>
  <v-section class="section-result" :is-large="true">
    <Banner :title="result.subtitle" />
    <div class="section-result__info">
      <div class="section-result__info-text">
        <p v-html="result.text" />
      </div>
      <v-button text="Пройти заново" @click="backToStartPage" />
    </div>
  </v-section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useTestStore from '@/store/test.ts'

const { result } = storeToRefs(useTestStore())
const { clearTest } = useTestStore()

const backToStartPage = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  clearTest()
}
</script>

<style lang="scss" scoped>
$white: $WHITE;
$yellow: $YELLOW;
$black-2: $BLACK-SECOND;

.section-result {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__title {
    font-family: Compaq;
    line-height: 150%;
    text-align: center;
    text-transform: uppercase;
    @include adaptive-font(2.2, 1.6);
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;

    @include tablet-desktop {
      padding: 20rem 6rem 10rem;
      row-gap: 20rem;
    }

    @include mobile {
      padding: 10rem 1.6rem 6rem;
      row-gap: 8rem;
    }

    &-text {
      @include tablet-desktop {
        margin: 0 10rem;
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
