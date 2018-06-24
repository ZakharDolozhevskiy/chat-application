import { defaultSettings } from '../config';
import * as Types from '../actions/settings';

const settings = (state = defaultSettings, action) => {
  switch (action.type) {
    case Types.CHANGE_THEME:
      return { ...state, theme: action.payload, default: false };
    case Types.CHANGE_LANGUAGE:
      return { ...state, language: action.payload, default: false };
    case Types.CHANGE_USERNAME:
      return { ...state, username: action.payload, default: false };
    case Types.CHANGE_TIME_FORMAT:
      return { ...state, timeFormat: action.payload, default: false };
    case Types.TOGGLE_HOT_KEYS:
      return { ...state, hotKeys: !state.hotKeys, default: false };
    case Types.RESET_SETTINGS:
      return { ...defaultSettings };
    default:
      return state
  }
};

export default settings;
