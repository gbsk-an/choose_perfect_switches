import { Products } from '@/types/index.ts'

export namespace Popup {
  export interface ProductsModel {
    status: boolean
    products: Products.Model[] | []
  }
}
