import React from 'react'
import { ThemeProvider as OiriginThemeProvider } from 'styled-components'
import { themes } from '../theme/themes'

export const ThemeProvider: React.FC<{ children: JSX.Element }> = function ({ children }) {
  return <OiriginThemeProvider theme={themes.light}>{children}</OiriginThemeProvider>
}
