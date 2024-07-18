import { required, email, helpers, maxLength, minLength, sameAs } from '@vuelidate/validators'

const passwordRule = (value = '') => {
  const containsUppercase = /[A-Z]/.test(value)
  const containsLowercase = /[a-z]/.test(value)
  const containsNumber = /[0-9]/.test(value)
  // const containsSpecial = /[#?!@$%^&*-]/.test(value)
  const minMaxSybmols = value.length > 8 && value.length < 20
  return containsUppercase && containsLowercase && containsNumber && minMaxSybmols
}

export default (ctx: any) => {
  const rules = {
    required: (rule: any) => {
      const name = rule.name ? `«${rule.name}» ` : ''
      const message = rule.customMessage || `Поле ${name}обязательно для заполнения`
      const validator = rule.validator || required
      return helpers.withMessage(message, validator)
    },
    maxLength: (rule: any) => {
      const name = rule.name ? `«${rule.name}» ` : ''
      const value = rule.value || 255
      const message = rule.customMessage || `Поле ${name}не должно превышать ${value} символов`
      const validator = rule.validator || maxLength(value)
      return helpers.withMessage(message, validator)
    },
    minLength: (rule: any) => {
      const name = rule.name ? `«${rule.name}» ` : ''
      const value = rule.value || 255
      const message = rule.customMessage || `Поле ${name}не должно содержать менее ${value} символов`
      const validator = rule.validator || minLength(value)
      return helpers.withMessage(message, validator)
    },
    sameAs: (rule: any) => {
      const value = rule.value || ''
      const message = rule.customMessage || `Пароли не совпадают`
      const validator = rule.validator || sameAs(value)
      return helpers.withMessage(message, validator)
    },
    email: (rule: any) => {
      const name = rule.name ? `«${rule.name}» ` : ''
      const message = rule.customMessage || `Поле ${name}содержит значение некорректного формата`
      const validator = rule.validator || email
      return helpers.withMessage(message, validator)
    },
    password: (rule: any) => {
      const name = rule.name ? `«${rule.name}» ` : ''
      const message =
        rule.customMessage ||
        `* ${name} должен содержать от 8 до 20 символов на латинице, а также  одну заглавную и одну строчную буквы, одну цифру.`
      const validator = rule.validator || passwordRule

      if (rule.extraParam) {
        return helpers.withMessage(message, validator(rule.extraParam))
      }

      return helpers.withMessage(message, validator)
    }
  }

  ctx.$configs.validationRules = rules
}
