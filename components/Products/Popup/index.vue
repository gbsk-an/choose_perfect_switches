<template>
  <div class="popup" @click.self="togglePopupProducts({ status: false })">
    <div class="popup-wrapper animate__animated animate__fadeInUp">
      <div class="popup__nav"></div>
      <ProductsList class="popup__content" :list="popupProducts.products" />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import usePopupStore from '@/store/popups.ts'

const { togglePopupProducts } = usePopupStore()
const { popupProducts } = storeToRefs(usePopupStore())
</script>

<style lang="scss" scoped>
$white: $WHITE;
$black-2: $BLACK-SECOND;
$yellow: $YELLOW;

.popup {
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  background-color: rgba($black-2, 0.7);

  &-wrapper {
    position: relative;
    display: block;
    overflow: hidden auto;
    min-height: 12rem;
    max-height: 85vh;
    background-color: $white;

    @include tablet-desktop {
      width: 80vw;
    }

    @include mobile {
      width: 100%;
    }

    &::-webkit-scrollbar {
      width: 0.4rem;
    }

    &::-webkit-scrollbar-track {
      background: $white;
    }

    &::-webkit-scrollbar-thumb {
      background-color: $black-2;
    }
  }

  &__nav {
    position: sticky;
    z-index: 11;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    background-color: $yellow;
  }

  &__content {
    @include tablet-desktop {
      padding: 4rem 6rem 6rem;
    }

    @include mobile {
      padding: 2rem 2rem 4rem;
    }
  }
}
</style>
