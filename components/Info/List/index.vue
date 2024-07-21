<template>
  <div class="info-list">
    <h2 class="info-list__title">There are three basic types of switches to choose from:</h2>
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

.info-list {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;

  &__title {
    font-family: EpilepsySans;
    line-height: 150%;
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
