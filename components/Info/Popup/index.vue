<template>
  <div class="popup" @click.self="togglePopupSwitches({ status: false })">
    <div class="popup-wrapper animate__animated animate__fadeInUp">
      <div class="popup__content">
        <div class="popup__content-image">
          <img :src="popupSwitches?.switches?.image?.src" :alt="popupSwitches?.switches?.image?.alt" />
        </div>
        <div class="popup__content-text">
          <span v-html="popupSwitches?.switches?.title" />
          <p v-html="popupSwitches?.switches?.text" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import usePopupStore from '@/store/popups.ts'

const { togglePopupSwitches } = usePopupStore()
const { popupSwitches } = storeToRefs(usePopupStore())
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

    @include tablet-desktop {
      width: 50vw;
    }

    @include mobile {
      width: 100%;
    }

    &::-webkit-scrollbar {
      width: 0.4rem;
    }

    &::-webkit-scrollbar-track {
      background-color: $black-2;
    }

    &::-webkit-scrollbar-thumb {
      background-color: $white;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    background-color: $black-2;

    &-image {
      width: 100%;
      height: 30rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: bottom;
      }
    }

    &-text {
      display: flex;
      flex-direction: column;
      padding: 2rem 4rem;
      color: $white;
      row-gap: 2rem;

      span {
        font-family: Compaq;
        line-height: 140%;
        @include adaptive-font(3, 1.6);
      }

      p {
        font-family: Compaq;
        line-height: 150%;
        @include adaptive-font(2, 1.4);
      }
    }
  }
}
</style>
