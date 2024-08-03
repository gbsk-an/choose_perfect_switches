<template>
  <li class="products-item">
    <div class="products-item__image">
      <img :src="image" :alt="name" />
    </div>
    <span class="products-item__title" v-html="name" />
    <v-button :theme="Button.Themes.NO_BORDER" text="Купить" />
    <span class="products-item__price" v-html="price" />
  </li>
</template>

<script setup lang="ts">
import { type Products, Button } from '@/types/index.ts'

defineProps<Products.Model>()
</script>

<style lang="scss" scoped>
$white: $WHITE;
$gold: $GOLD;
$black-2: $BLACK-SECOND;

.products-item {
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;

  @include tablet-desktop {
    width: 32%;
  }

  @include mobile {
    width: 100%;
  }

  &__title,
  &__price {
    color: $black-2;
    font-family: Compaq;
    line-height: 140%;
    @include adaptive-font(2, 1.4);
  }

  &__image {
    width: 23rem;
    height: 23rem;
    background-color: $white;

    @include mobile {
      align-self: center;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      pointer-events: none;
    }
  }

  &__price {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
  }
}
</style>
