<template>
  <li class="info-item">
    <v-button :text="title" @click="openSwithesInfoPopup" />
  </li>
</template>

<script setup lang="ts">
import type { Info } from '@/types/index.ts'
import usePopupStore from '@/store/popups.ts'

const props = defineProps<Info.Model>()

const { togglePopupSwitches } = usePopupStore()

const openSwithesInfoPopup = (): void => {
  togglePopupSwitches({
    status: true,
    switches: {
      image: props.image,
      title: props.title,
      text: props.text
    }
  })
}
</script>

<style lang="scss" scoped>
$gold: $GOLD;

.info-item {
  display: flex;
  flex-direction: column;
  row-gap: 1.4rem;

  @include mobile {
    width: 100%;

    &:deep(.ui-button) {
      width: 100%;
    }
  }

  &:first-child {
    position: relative;

    &::after {
      position: absolute;
      z-index: 1;
      top: -2rem;
      right: -1rem;
      width: 4rem;
      height: 4rem;
      background-image: url('@/assets/images/gif/heart.webp');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      content: '';
    }
  }
}
</style>
