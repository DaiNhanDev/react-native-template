import * as React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { lazyLoad } from '../../utils/loadable'

export const HomePage = lazyLoad(
  () => import('./index'),
  module => module.HomeView,
  {
    fallback: (
      <View>
        <ActivityIndicator />
      </View>
    ),
  },
)
