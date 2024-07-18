import { nuxtContext } from '@nuxt/types'

export default (context: nuxtContext) => {
  const enums = {} as const

  context.$configs.enums = enums
}
