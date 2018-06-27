import { loadState, saveState } from '../localStorage';

jest.mock('lodash.throttle', () => fn => fn);

const currentSettings = { x : 100 };

it('should return undefined if settings haven\'t been added to ls', () => {
  expect(loadState()).toBeUndefined();
});

it('should add settings to local storage', async () => {
  saveState(currentSettings);
  expect(loadState()).toEqual(currentSettings);
});
