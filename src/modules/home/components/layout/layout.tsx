import React from 'react'
import { Screen, Center, Text, Space } from '@/components/widgets'

type IProps = {
  title?: string
  children?: React.ReactNode
}

export const HomeLayout: React.FC<IProps> = function ({ children, title }) {
  return (
    <Screen safe>
      <Center style={{ flex: 1 }}>
        <Text variant="h1">{title}</Text>
        <Space height={32} />
        {children}
      </Center>
    </Screen>
  )
}
