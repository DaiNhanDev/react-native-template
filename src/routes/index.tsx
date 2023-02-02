import React from 'react'
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native'
import RNBootSplash from 'react-native-bootsplash'
import { StackNavigationProp } from '@react-navigation/stack'
import { HomeRoutes, HomeStackParamList } from '@/modules/home/routes'
import { navigationRef } from '../utils/navigation-utilities'

export type StackParamList = HomeStackParamList

export type AppNavigationProp = StackNavigationProp<StackParamList>

export const AppRoutes: React.FC = function () {
  // const isLoggedIn = useAuthStore(state => state.isLoggedIn)

  return (
    <NavigationContainer
      ref={navigationRef}
      // theme={isDarkMode ? DarkTheme : DefaultTheme}
      onReady={() => RNBootSplash.hide({ fade: true })}>
      {/* {!isLoggedIn ? <AuthRoutes /> : <HomeRoutes />} */}
      <HomeRoutes />
    </NavigationContainer>
  )
}
