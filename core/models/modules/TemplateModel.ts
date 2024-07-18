import { nuxtContext } from '@nuxt/types'

export default (context: nuxtContext) => {
  class TemplateModel {}

  context.$models.tempalte = TemplateModel
}
