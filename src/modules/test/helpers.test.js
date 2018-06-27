import { isEnterKey, isCtrlKey } from '../helpers';

it('should return true if Enter key pressed', () => {
  expect(isEnterKey({ keyCode: 10 })).toBeTruthy();
  expect(isEnterKey({ keyCode: 13 })).toBeTruthy();
  expect(isEnterKey({ keyCode: 1 })).toBeFalsy();
});

it('should return true if CTRL key pressed', () => {
  expect(isCtrlKey({ ctrlKey: true })).toBeTruthy();
  expect(isCtrlKey({ metaKey: true })).toBeTruthy();
  expect(isCtrlKey({ })).toBeFalsy();
});