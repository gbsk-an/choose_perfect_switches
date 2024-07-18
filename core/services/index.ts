import { nuxtContext } from '@nuxt/types'
import { coreFunctionList } from '@/types/ICore.ts'
import APIClientService from '@/core/services/modules/APIClientService.ts'
import TemplateService from '@/core/services/modules/TemplateService.ts'
import ValidatorService from '@/core/services/modules/ValidatorService.ts'

const serviceList: coreFunctionList = [APIClientService, TemplateService, ValidatorService]

export default (context: nuxtContext) => {
  class ServicesLocator {}
  context.$services = new ServicesLocator()
  serviceList.forEach((fn) => fn(context))
}
