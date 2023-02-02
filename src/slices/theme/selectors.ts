import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../../types'
import { themes } from '../../theme'
import { initialState } from '.'

const selectDomain = (state: RootState) => state?.theme || initialState

export const selectTheme = createSelector([selectDomain], theme => themes[theme.selected])

export const selectThemeKey = createSelector([selectDomain], theme => theme.selected)
