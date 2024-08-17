<template>
  <ul class="shops-list">
    <template v-for="item in list" :key="item.name">
      <ShopsListItem v-bind="item" />
    </template>
  </ul>
</template>

<script setup lang="ts">
import type { Shops } from '@/types/index.ts'

interface Props {
  list: Shops.Model[]
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
.shops-list {
  position: absolute;
  display: flex;
  width: 100%;
  height: 80%;
  flex-direction: column;
  row-gap: 2rem;
}
</style>
