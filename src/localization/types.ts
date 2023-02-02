import EN from './en'

// export type ConvertedToObjectType<T> = {
//   [P in keyof T]: T[P] extends string ? string : ConvertedToObjectType<T[P]>
// }

export type ConvertedToObjectType<T> = {
  [P in keyof T]: T[P] extends string ? string : ConvertedToObjectType<T[P]>
} & {
  [P: string]: any
}

export type TranslationJsonType = typeof EN
