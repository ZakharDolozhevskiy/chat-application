import { defaultSettings } from '../../config';
import * as Types from '../../actions/settings';

import settings from '../settings';

it('should return default state', () => {
  expect(settings(undefined, {})).toEqual(defaultSettings);
});

it('should change theme in the state', () => {
  const state = { theme: 'A' };
  const action = { type: Types.CHANGE_THEME, payload: 'B' };

  expect(settings(state, action).theme).toEqual('B');
});

it('should change language in the state', () => {
  const state = { language: 'A' };
  const action = { type: Types.CHANGE_LANGUAGE, payload: 'B' };

  expect(settings(state, action).language).toEqual('B');
});

it('should change username in the state', () => {
  const state = { username: 'A' };
  const action = { type: Types.CHANGE_USERNAME, payload: 'B' };

  expect(settings(state, action).username).toEqual('B');
});

it('should change timeFormat in the state', () => {
  const state = { timeFormat: 12 };
  const action = { type: Types.CHANGE_TIME_FORMAT, payload: 24 };

  expect(settings(state, action).timeFormat).toEqual(24);
});

it('should change hotKeys active state', () => {
  const state = { hotKeys: false };
  const action = { type: Types.TOGGLE_HOT_KEYS };

  expect(settings(state, action).hotKeys).toEqual(true);
});

it('should reset state to default', () => {
  const state = { default: true };
  const action = { type: Types.RESET_SETTINGS };

  expect(settings(state, action)).toEqual(defaultSettings);
});