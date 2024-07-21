import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import { Question } from '@/types/index.ts'

export default defineStore('test-progress', () => {
  const question = ref<Question.QuestionType>(Question.QuestionType.START)

  const setQuestion = (newStep: Question.QuestionType): void => {
    question.value = newStep
  }

  const testData = reactive({
    color: ''
  })

  const setResult = () => {}

  const setAnswer = (key, value) => {
    testData[key] = value
  }

  const clearTest = () => {
    setQuestion(Question.QuestionType.START)
  }

  return { question, setQuestion, clearTest, setAnswer, setResult, testData }
})
