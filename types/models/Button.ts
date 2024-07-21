export namespace Button {
  export enum Themes {
    YELLOW = 'yellow'
  }

  export enum Types {
    BUTTON = 'button',
    SUBMIT = 'submit',
    RESET = 'reset'
  }

  export interface Model {
    type?: Button.Types
    disabled?: boolean
    theme?: Button.Themes
    text: string
  }

  export interface Emits {
    (event: 'click'): void
  }
}
