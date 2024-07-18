import { nuxtContext } from '@nuxt/types'

const UIComponents = []

export default defineNuxtPlugin((context: nuxtContext) => {
  UIComponents.forEach((uiItem) => {
    context.vueApp.component(uiItem.name, uiItem.component)
  })
})
