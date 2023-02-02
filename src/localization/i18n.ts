import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en'
import vi from './vi'
import { convertLanguageJsonToObject } from './translations'

convertLanguageJsonToObject(en)
export const translationsJson = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
}

i18next.use(initReactI18next).init({
  resources: translationsJson,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18next
