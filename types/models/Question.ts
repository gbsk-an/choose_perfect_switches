import { Products } from '@/types/index.ts'

export namespace Question {
  export interface IAnswer {
    id: string
    answer: string
    next: string
    icon?: string
  }

  export interface Model {
    id: string
    next: string
    question: string
    answerList: IAnswer[]
  }

  export enum QuestionType {
    START = 'start',
    USAGE = 'usage',
    GAMES = 'games',
    TYPING = 'typing',
    NOISE = 'noise',
    DESIGN = 'design',
    RESULT = 'result'
  }

  export interface IResult {
    subtitle: string
    text: string
    products: Products.Model[] | null
  }
}
