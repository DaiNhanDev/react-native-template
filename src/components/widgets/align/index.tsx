/* eslint-disable prettier/prettier */
import React from 'react'
import { ViewProps, View } from 'react-native'

type Props = {
  alignment?:
  | 'bottomCenter'
  | 'bottomLeft'
  | 'bottomRight'
  | 'center'
  | 'centerLeft'
  | 'centerRight'
  | 'topCenter'
  | 'topLeft'
  | 'topRight'
}

const Alignment: any = {
  bottomCenter: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bottomLeft: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  bottomRight: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerLeft: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  centerRight: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  topCenter: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  topLeft: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  topRight: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
}

export const Align: React.FC<Props & ViewProps> = function ({
  children,
  alignment = 'bottomLeft',
  ...props
}) {
  return (
    <View style={{ ...Alignment[alignment] }} {...props}>
      {children}
    </View>
  )
}
