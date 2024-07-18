import { nuxtContext } from '@nuxt/types'
import { coreFunctionList } from '@/types/ICore.ts'
import Endpoints from '@/core/configs/modules/Endpoints.ts'
import Constants from '@/core/configs/modules/Constants.ts'
import Enums from '@/core/configs/modules/Enums.ts'
import ValidationRules from '@/core/configs/modules/ValidationRules.ts'
import Validations from '@/core/configs/modules/Validations.ts'

const configList: coreFunctionList = [Endpoints, Enums, Constants, ValidationRules, Validations]

export default (context: nuxtContext) => {
  class ConfigsLocator {}
  context.$configs = new ConfigsLocator()
  configList.forEach((fn) => fn(context))
}
