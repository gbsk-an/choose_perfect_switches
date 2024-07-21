import { nuxtContext } from '@nuxt/types'

import VLayout from '@/components/Packages/VLayout.vue'
import VSection from '@/components/Packages/VSection.vue'
import VButton from '@/components/UI/VButton.vue'

const basisComponents = [
  { name: 'VLayout', component: VLayout },
  { name: 'VSection', component: VSection },
  { name: 'VButton', component: VButton }
]

export default defineNuxtPlugin((context: nuxtContext) => {
  basisComponents.forEach((packageItem) => {
    context.vueApp.component(packageItem.name, packageItem.component)
  })
})
