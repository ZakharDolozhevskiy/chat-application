export const api = {
  host: 'http://185.13.90.140:8081/',
  channel: 'message'
};

export const routes = {
  MAIN: '/',
  SETTINGS: '/settings'
};

export const timeFormats = {
  12: 'hh:mm a',
  24: 'HH:mm'
};

export const themes = {
  LIGHT: 'light',
  DARK: 'dark'
};

export const lang = {
  EN: 'en',
  UA: 'ua'
};

export const defaultSettings = {
  hotKeys: true,
  default: true,
  username: '',
  theme: themes.LIGHT,
  language: lang.EN,
  timeFormat: timeFormats[24]
};