import React from 'react'
import { useTranslation } from 'react-i18next'
import { Text, Switch, Space, Button } from '@/components/widgets'
import { HomeLayout } from './components/layout'
import { useThemeSlice } from '../../slices/theme'
import { translations } from '../../localization/translations'

export const HomeView: React.FC = function () {
  const { changeTheme, themeKey } = useThemeSlice()
  const handleChangeTheme = () => {
    changeTheme(themeKey === 'light' ? 'dark' : 'light')
  }
  const { t } = useTranslation()
  const { common } = translations

  return (
    <HomeLayout title="Home">
      <Text>{t(common.change_language)}</Text>
      <Space height={32} />
      <Switch size={60} isActive={themeKey === 'dark'} onPress={handleChangeTheme} />
      <Button onPress={() => console.log('=====> ssdd')}>
        <Text>sssssss</Text>
      </Button>
    </HomeLayout>
  )
}
