import { useEffect } from 'react'
import { StatusBar } from 'react-native'

export const useBarStyle = () => {
  useEffect(() => {
    StatusBar.setBarStyle('light-content')
  }, [])
}
