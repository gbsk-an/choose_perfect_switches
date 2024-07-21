import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import { Question } from '@/types/index.ts'

export default defineStore('test-progress', () => {
  const root = useNuxtApp()
  const { constants } = root.$configs

  const resultList = constants.result

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

  const result = ref<Question.IResult>({ text: '', subtitle: '' })

  const setResult = () => {
    const resultAnswersArr = Object.values(testData)
    const topAnswer = resultAnswersArr
      .sort((a, b) => resultAnswersArr.filter((v) => v === a).length - resultAnswersArr.filter((v) => v === b).length)
      .pop()

    result.value = resultList[topAnswer]
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
    result.value = { text: '', subtitle: '' }
    setQuestion(Question.QuestionType.START)
  }

  return { question, setQuestion, clearTest, setAnswer, setResult, testData, result }
})
