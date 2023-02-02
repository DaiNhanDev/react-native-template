import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'

// import { ModalPortal } from 'react-native-modals'
import { AppRoutes } from '@/routes'
import { ErrorBoundary } from '@/modules/error/components'
import { configureAppStore } from './redux/configureStore'
import { useBarStyle } from './hooks'

import { ThemeProvider } from './theme'
import './localization/i18n'

const store = configureAppStore()

export const App: React.FC = function () {
  useBarStyle()

  return (
    <Provider store={store}>
      <ThemeProvider>
        <SafeAreaProvider>
          <ErrorBoundary catchErrors="dev">
            <AppRoutes />
          </ErrorBoundary>
        </SafeAreaProvider>
        {/* <ModalPortal /> */}
      </ThemeProvider>
    </Provider>
  )
}
