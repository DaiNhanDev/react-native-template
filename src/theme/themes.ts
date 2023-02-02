import { darkColor, lightColor } from './colors'
import { typography } from './typography'
import { spacing } from './spacing'

const lightTheme = {
  ...lightColor,
  typography,
  spacing,
}

const darkTheme: Theme = {
  ...darkColor,
  typography,
  spacing,
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}
