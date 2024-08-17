import { Shops } from '@/types/index.ts'

export namespace Products {
  export interface Model {
    name: string
    image: string
    price: string
    shops: Shops[]
  }
}
