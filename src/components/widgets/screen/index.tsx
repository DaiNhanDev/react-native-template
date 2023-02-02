import React from 'react'
import { MotiView } from 'moti'
import { SafeAreaView } from 'react-native-safe-area-context'
import { lightColor, transitions, styles } from '../../../theme'

type LayoutProps = {
  children: React.ReactNode
  safe?: boolean
}

export const Screen: React.FC<LayoutProps> = function ({ children, safe = false }) {
  if (!safe)
    return (
      <MotiView
        style={styles.flex_1}
        transition={transitions.screen}
        from={{
          backgroundColor: lightColor.background,
        }}
        animate={{
          backgroundColor: lightColor.background,
        }}>
        {children}
      </MotiView>
    )
  return (
    <SafeAreaView style={[styles.flex_1, { backgroundColor: lightColor.background }]}>
      <MotiView
        style={styles.flex_1}
        transition={transitions.screen}
        from={{
          backgroundColor: lightColor.primary,
        }}
        animate={{
          backgroundColor: lightColor.background,
        }}>
        {children}
      </MotiView>
    </SafeAreaView>
  )
}
