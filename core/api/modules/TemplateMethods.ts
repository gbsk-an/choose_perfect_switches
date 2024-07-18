import { nuxtContext } from '@nuxt/types'

export default (context: nuxtContext) => {
  class TemplateMethods {}

  context.$api.template = new TemplateMethods()
}
