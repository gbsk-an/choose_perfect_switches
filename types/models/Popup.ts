import { Products, Switches } from '@/types/index.ts'

export namespace Popup {
  export interface ProductsModel {
    status: boolean
    products: Products.Model[] | []
  }

  export interface SwitchesModel {
    status: boolean
    switches: Switches.Model | null
  }
}
