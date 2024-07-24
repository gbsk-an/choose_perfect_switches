import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Popup } from '@/types/index.ts'

export default defineStore('popups', () => {
  const popupProducts = ref<Popup.ProductsModel>({
    status: false,
    products: []
  })

  const togglePopupProducts = (payload: Popup.ProductsModel): void => {
    const html: HTMLElement = document.querySelector('html')
    document.body.classList[payload.status ? 'add' : 'remove']('overflow-hidden')
    html.classList[payload.status ? 'add' : 'remove']('overflow-hidden')

    popupProducts.value = {
      status: payload.status || false,
      products: payload.products || []
    }
  }

  return { togglePopupProducts, popupProducts }
})
