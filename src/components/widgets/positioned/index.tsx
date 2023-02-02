import React from 'react'
import { ViewProps, View } from 'react-native'

export const Positioned: React.FC<ViewProps> = function ({ children, ...props }) {
  return (
    <View style={{ position: 'absolute' }} {...props}>
      {children}
    </View>
  )
}
