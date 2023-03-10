import React from 'react'
import {
  createStackNavigator,
  StackNavigationOptions,
  TransitionPresets,
} from '@react-navigation/stack'
import { HomePage } from '../loadable'

export type HomeStackParamList = {
  home: undefined
}

const options: StackNavigationOptions = {
  headerShown: true,
  ...TransitionPresets.SlideFromRightIOS,
}

const Stack = createStackNavigator<HomeStackParamList>()

export const HomeRoutes: React.FC = function () {
  return (
    <Stack.Navigator initialRouteName="home" screenOptions={options}>
      <Stack.Screen
        name="home"
        component={HomePage}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}
