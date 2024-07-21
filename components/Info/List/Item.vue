<template>
  <li class="info-list-item">
    <div class="info-list-item__image">
      <img :src="image.src" :alt="image.alt" />
    </div>
    <span class="info-list-item__title" v-html="title" />
    <p class="info-list-item__text" v-html="text" />
  </li>
</template>

<script setup lang="ts">
import type { InfoList } from '@/types/index.ts'

defineProps<InfoList.Model>()
</script>

<style lang="scss" scoped>
$gold: $GOLD;

.info-list-item {
  display: flex;
  flex-direction: column;
  row-gap: 1.4rem;

  @include tablet-desktop {
    width: 33%;

    &:not(:nth-child(2n)) {
      .info-list-item__image {
        height: 30rem;
      }
    }

    &:nth-child(2n) {
      .info-list-item__title {
        order: 0;
      }

      .info-list-item__text {
        order: 1;
      }

      .info-list-item__image {
        height: 100%;
        order: 2;
      }
    }
  }

  @include mobile {
    width: 100%;
  }

  &__image {
    @include tablet-desktop {
      margin-bottom: 2rem;
    }

    @include mobile {
      height: 23rem;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      pointer-events: none;

      @include mobile {
        object-position: bottom;
      }
    }
  }

  &__title {
    font-family: Compaq;
    line-height: 140%;
    text-align: center;
    text-shadow: $gold 0.15rem 0.25rem;
    @include adaptive-font(2, 1.4);
  }

  &__text {
    font-family: EpilepsySans;
    line-height: 140%;
    text-align: justify;
    @include adaptive-font(2, 1.4);
  }
}
</style>
