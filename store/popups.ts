import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Popup } from '@/types/index.ts'

export default defineStore('popups', () => {
  function hideOverflow(status): void {
    const html: HTMLElement = document.querySelector('html')
    document.body.classList[status ? 'add' : 'remove']('overflow-hidden')
    html.classList[status ? 'add' : 'remove']('overflow-hidden')
  }

  const popupSwitches = ref<Popup.SwitchesModel>({
    status: false,
    switches: null
  })

  const togglePopupSwitches = (payload: Popup.SwitchesModel): void => {
    hideOverflow(payload.status)

    popupSwitches.value = {
      status: payload.status || false,
      switches: payload.switches || null
    }
  }

  const popupProducts = ref<Popup.ProductsModel>({
    status: false,
    products: []
  })

  const togglePopupProducts = (payload: Popup.ProductsModel): void => {
    hideOverflow(payload.status)

    popupProducts.value = {
      status: payload.status || false,
      products: payload.products || []
    }
  }

  return { togglePopupProducts, togglePopupSwitches, popupProducts, popupSwitches }
})
