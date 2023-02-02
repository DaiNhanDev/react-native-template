import { themes } from '../../theme'

export type ThemeKeyType = keyof typeof themes

export interface ThemeState {
  selected: ThemeKeyType
}
