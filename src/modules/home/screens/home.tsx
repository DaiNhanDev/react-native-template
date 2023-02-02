import React from 'react'
import { useTranslation } from 'react-i18next'
import { Text, Switch, Space } from '@/components/widgets'
import { HomeLayout } from '../components/layout'
import { useThemeSlice } from '../../../slices/theme'
import { translations } from '../../../localization/translations'

export const Home: React.FC = function () {
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
    </HomeLayout>
  )
}
