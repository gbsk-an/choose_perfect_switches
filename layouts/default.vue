<template>
  <v-layout>
    <template #page-content>
      <ProductsPopup v-show="popupProducts.status" />
      <nuxt-page />
    </template>
  </v-layout>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import usePopupStore from '@/store/popups.ts'
import ProductsPopup from '@/components/Products/Popup.vue'

const { popupProducts } = storeToRefs(usePopupStore())
</script>
