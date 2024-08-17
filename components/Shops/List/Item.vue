<template>
  <li class="shops-item">
    <a :href="link" target="_blank" v-text="name" />
  </li>
</template>

<script setup lang="ts">
import { type Shops } from '@/types/index.ts'

defineProps<Shops.Model>()
</script>

<style lang="scss" scoped>
$white: $WHITE;
$gold: $GOLD;
$black-2: $BLACK-SECOND;

.shops-item {
  a {
    color: $black-2;
    font-family: Compaq;
    line-height: 140%;
    @include adaptive-font(2, 1.4);
    white-space: nowrap;

    @include hover {
      transition: all 300ms ease;

      &:hover {
        opacity: 0.6;
      }
    }
  }
}
</style>
