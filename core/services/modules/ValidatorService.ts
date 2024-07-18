export default (context: any) => {
  class ValidatorService {
    private static rulesConfig = context.$configs.validationRules

    generateRules(data = []) {
      const result: any = {}

      data.forEach((item: any) => {
        result[item.fieldName] = {}
        const rules = item.rules || {}

        Object.entries(rules).forEach(([rule, value]) => {
          result[item.fieldName][rule] = ValidatorService.rulesConfig[rule](value)
        })

        if (item.customRules) {
          const customRules = item.customRules || {}
          Object.entries(customRules).forEach(([rule, value]) => {
            result[item.fieldName][rule] = value
          })
        }
      })
      return result
    }
  }

  context.$services.validator = new ValidatorService()
}
