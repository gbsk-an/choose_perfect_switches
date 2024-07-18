import { nuxtContext } from '@nuxt/types'

import VLayout from '@/components/packages/VLayout.vue'
import VButton from '@/components/UI/VButton.vue'

const basisComponents = [
  { name: 'VLayout', component: VLayout },
  { name: 'VButton', component: VButton }
]

export default defineNuxtPlugin((context: nuxtContext) => {
  basisComponents.forEach((packageItem) => {
    context.vueApp.component(packageItem.name, packageItem.component)
  })
})
