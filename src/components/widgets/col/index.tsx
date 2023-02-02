import React from 'react'
import { ViewProps, View } from 'react-native'

export const Col: React.FC<ViewProps> = function ({ children, ...props }) {
  return (
    <View style={{ flexDirection: 'column' }} {...props}>
      {children}
    </View>
  )
}
