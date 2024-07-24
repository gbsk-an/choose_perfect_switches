export namespace Products {
  export interface IShop {
    link: string
    name: string
  }

  export interface Model {
    name: string
    image: string
    price: string
    shops: IShop[]
  }
}
