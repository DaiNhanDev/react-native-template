import React from 'react'
import { ViewProps, View } from 'react-native'

export const Stack: React.FC<ViewProps> = function ({ children, ...props }) {
  return (
    <View {...props}>
      {React.Children.map(children, (child, index) => {
        const length = Array.isArray(children) ? children.length : 0
        return React.cloneElement(child as React.ReactElement<any>, {
          position: 'absolute',
          zIndex: length - index,
        })
      })}
    </View>
  )
}
