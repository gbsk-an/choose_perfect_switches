<template>
  <div class="info-list">
    <h2 class="info-list__title">Существует три основных типа свитчей:</h2>
    <ul>
      <InfoListItem v-for="item in list" :key="item.id" v-bind="item" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { InfoList } from '@/types'

interface Props {
  list: InfoList.Model[]
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
$white: $WHITE;
$yellow: $YELLOW;
$black-2: $BLACK-SECOND;
$gold: $GOLD;

.info-list {
  display: flex;
  flex-direction: column;

  @include tablet-desktop {
    row-gap: 4rem;
  }

  @include mobile {
    row-gap: 2rem;
  }

  &__title {
    font-family: Compaq;
    line-height: 150%;
    text-align: center;
    text-shadow: $gold 0.15rem 0.25rem;
    @include adaptive-font(2.2, 1.6);
  }

  ul {
    display: flex;

    @include tablet-desktop {
      flex-direction: row;
      column-gap: 2rem;
    }

    @include mobile {
      flex-direction: column;
      row-gap: 2rem;
    }
  }
}
</style>
