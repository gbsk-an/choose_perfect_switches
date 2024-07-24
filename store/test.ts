import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import { Question } from '@/types/index.ts'

export default defineStore('test-progress', () => {
  const root = useNuxtApp()
  const { constants } = root.$configs

  const resultList = constants.result
  const productsList = constants.products

  const question = ref<Question.QuestionType>(Question.QuestionType.START)

  const setQuestion = (newStep: Question.QuestionType): void => {
    question.value = newStep
  }

  const testData = reactive({
    usage: '',
    games: '',
    typing: '',
    noise: '',
    design: ''
  })

  const result = ref<Question.IResult>({ text: '', subtitle: '', products: null })

  const setResult = () => {
    const resultAnswersArr = Object.values(testData)
    const topAnswer = resultAnswersArr
      .sort((a, b) => resultAnswersArr.filter((v) => v === a).length - resultAnswersArr.filter((v) => v === b).length)
      .pop()

    result.value = {
      text: resultList[topAnswer].text,
      subtitle: resultList[topAnswer].subtitle,
      products: productsList[topAnswer]
    }
  }

  const setAnswer = (key, value) => {
    testData[key] = value
  }

  const clearTest = () => {
    testData.usage = ''
    testData.games = ''
    testData.typing = ''
    testData.noise = ''
    testData.design = ''
    result.value = { text: '', subtitle: '', products: null }
    setQuestion(Question.QuestionType.START)
  }

  return { question, setQuestion, clearTest, setAnswer, setResult, testData, result }
})
