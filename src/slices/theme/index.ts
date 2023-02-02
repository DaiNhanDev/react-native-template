/* eslint-disable no-param-reassign */
import { PayloadAction } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import { getThemeFromStorage } from '../../theme'
import { createSlice } from '../../utils/@reduxjs/toolkit'
import { useInjectReducer } from '../../utils/redux-injectors'
import { ThemeKeyType, ThemeState } from './types'
import { selectTheme, selectThemeKey } from './selectors'

export const initialState: ThemeState = {
  selected: getThemeFromStorage(),
}

const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state: { selected: ThemeKeyType }, action: PayloadAction<ThemeKeyType>) {
      state.selected = action.payload
    },
  },
})

export const { actions: themeActions, reducer } = slice

export const useThemeSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer })
  const { actions } = slice
  const dispatch = useDispatch()

  const theme = useSelector(selectTheme)
  const themeKey = useSelector(selectThemeKey)

  const changeTheme = (payload: any) => dispatch(actions.changeTheme(payload))
  return { changeTheme, theme, themeKey }
}
