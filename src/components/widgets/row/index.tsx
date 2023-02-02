import React from 'react'
import { ViewProps, View } from 'react-native'

export const Row: React.FC<ViewProps> = function ({ children, ...props }) {
  return (
    <View style={{ flexDirection: 'row' }} {...props}>
      {children}
    </View>
  )
}
