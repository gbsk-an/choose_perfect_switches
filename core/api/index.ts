import { nuxtContext } from '@nuxt/types'
import { coreFunctionList } from '@/types/ICore.ts'

const apiList: coreFunctionList = []

export default (context: nuxtContext) => {
  class ApiLocator {}
  context.$api = new ApiLocator()
  apiList.forEach((fn) => fn(context))
}
