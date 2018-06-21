import {
  CHANGE_THEME,
  RESET_SETTINGS,
  CHANGE_LANGUAGE,
  CHANGE_USERNAME,
  TOGGLE_HOT_KEYS,
  CHANGE_TIME_FORMAT
} from '../actions/settings';

const defaultSettings = {
  username: 'Newcomer',
  theme: 'light',
  hotKeys: true,
  language: 'en',
  timeFormat: '24'
};

const settings = (state = defaultSettings, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, theme: action.payload };
    case CHANGE_LANGUAGE:
      return { ...state, language: action.payload };
    case CHANGE_USERNAME:
      return { ...state, username: action.payload };
    case CHANGE_TIME_FORMAT:
      return { ...state, timeFormat: action.payload };
    case TOGGLE_HOT_KEYS:
      return { ...state, hotKeys: !state.hotKeys };
    case RESET_SETTINGS:
      return { ...defaultSettings };
    default:
      return state
  }
};

export default settings;
