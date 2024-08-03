<template>
  <ul class="products-list">
    <template v-for="item in list" :key="item.name">
      <ProductsListItem v-bind="item" />
    </template>
  </ul>
</template>

<script setup lang="ts">
import type { Products } from '@/types/index.ts'

interface Props {
  list: Products.Model[]
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
.products-list {
  display: flex;

  @include tablet-desktop {
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 4rem;
  }

  @include mobile {
    flex-direction: column;
    row-gap: 8rem;
  }
}
</style>
