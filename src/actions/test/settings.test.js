import * as Actions from '../settings';

test('changeUserName action', () => {
  const username = 'new user';
  const output = Actions.changeUserName(username);

  expect(output.type).toBe(Actions.CHANGE_USERNAME);
  expect(output.payload).toBe(username);
});

test('changeTheme action', () => {
  const theme = 'light';
  const output = Actions.changeTheme(theme);

  expect(output.type).toBe(Actions.CHANGE_THEME);
  expect(output.payload).toBe(theme);
});

test('changeTimeFormat action', () => {
  const format = '12.05';
  const output = Actions.changeTimeFormat(format);

  expect(output.type).toBe(Actions.CHANGE_TIME_FORMAT);
  expect(output.payload).toBe(format);
});

test('changeLanguage action', () => {
  const lang = 'en';
  const output = Actions.changeLanguage(lang);

  expect(output.type).toBe(Actions.CHANGE_LANGUAGE);
  expect(output.payload).toBe(lang);
});

test('toggleHotKeys action', () => {
  expect(Actions.toggleHotKeys())
    .toEqual({ type: Actions.TOGGLE_HOT_KEYS });
});

test('resetSettings action', () => {
  expect(Actions.resetSettings())
    .toEqual({ type: Actions.RESET_SETTINGS });
});