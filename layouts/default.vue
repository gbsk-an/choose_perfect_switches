<template>
  <v-layout>
    <template #page-content>
      <ProductsPopup v-show="popupProducts.status" />
      <InfoPopup v-show="popupSwitches.status" />
      <nuxt-page />
    </template>
  </v-layout>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import usePopupStore from '@/store/popups.ts'
import ProductsPopup from '@/components/Products/Popup/index.vue'
import InfoPopup from '@/components/Info/Popup/index.vue'

const { popupProducts, popupSwitches } = storeToRefs(usePopupStore())
</script>
