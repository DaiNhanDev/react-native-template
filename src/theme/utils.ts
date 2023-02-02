import { themes } from './themes'
import { mmkv } from '../utils'

export type ThemeKeyType = keyof typeof themes

// /* istanbul ignore next line */
// export const isSystemDark = window?.matchMedia
//   ? window.matchMedia('(prefers-color-scheme: dark)')?.matches
//   : undefined;

export function saveTheme(theme: ThemeKeyType) {
  mmkv.set('selectedTheme', theme)
}

// /* istanbul ignore next line */
export function getThemeFromStorage(): ThemeKeyType {
  const theme = mmkv.getString('selectedTheme')
  return theme ? (theme as ThemeKeyType) : 'light'
}
