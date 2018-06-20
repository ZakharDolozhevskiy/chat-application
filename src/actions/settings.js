export const CHANGE_USERNAME = 'CHANGE_USERNAME';
export const CHANGE_THEME = 'CHANGE_THEME';
export const CHANGE_TIME_FORMAT = 'CHANGE_TIME_FORMAT';
export const TOGGLE_HOT_KEYS = 'TOGGLE_HOT_KEYS';
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
export const RESET_SETTINGS = 'RESET_SETTINGS';

export const changeUserName = (text) => ({
	type: CHANGE_USERNAME,
	payload: text
});

export const changeTheme = (ev, theme) => ({
	type: CHANGE_THEME,
	payload: theme
});

export const changeTimeFormat = (ev, timeFormat) => ({
	type: CHANGE_TIME_FORMAT,
	payload: timeFormat
});

export const toggleHotKeys = (ev, timeFormat) => ({
	type: TOGGLE_HOT_KEYS,
});

export const changeLanguage = (language) => ({
	type: CHANGE_LANGUAGE,
	payload: language
});

export const resetSettings = () => ({
	type: RESET_SETTINGS
});