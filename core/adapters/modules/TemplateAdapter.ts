import { nuxtContext } from '@nuxt/types'

export default (context: nuxtContext) => {
  class TemplateAdapter {}

  context.$adapters.TemplateAdapter = new TemplateAdapter()
}
