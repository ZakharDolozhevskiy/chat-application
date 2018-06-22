import { timeFormats } from '../config';
import * as Types from '../actions/settings';

const defaultSettings = {
  username: 'Newcomer',
  theme: 'light',
  hotKeys: true,
  language: 'en',
  timeFormat: timeFormats[24]
};

const settings = (state = defaultSettings, action) => {
  switch (action.type) {
    case Types.CHANGE_THEME:
      return { ...state, theme: action.payload };
    case Types.CHANGE_LANGUAGE:
      return { ...state, language: action.payload };
    case Types.CHANGE_USERNAME:
      return { ...state, username: action.payload };
    case Types.CHANGE_TIME_FORMAT:
      return { ...state, timeFormat: action.payload };
    case Types.TOGGLE_HOT_KEYS:
      return { ...state, hotKeys: !state.hotKeys };
    case Types.RESET_SETTINGS:
      return { ...defaultSettings };
    default:
      return state
  }
};

export default settings;
