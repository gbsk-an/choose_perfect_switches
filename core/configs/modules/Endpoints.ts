import { nuxtContext } from '@nuxt/types'

export default (context: nuxtContext) => {
  const endpoints = {}

  context.$configs.endpoints = endpoints
}
