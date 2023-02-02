import { MMKV } from 'react-native-mmkv'

export const mmkv = new MMKV()

const KEYS = {
  TOKEN: '@TOKEN',
  THEME: '@THEME',
}

export const storage = {
  saveAccessToken: (data: string) => {
    mmkv.set(KEYS.TOKEN, data)
  },
  getAccessToken: () => {
    return mmkv.getString(KEYS.TOKEN)
  },
}
