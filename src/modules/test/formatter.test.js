import { formatMessage } from '../formatter';

it('should extract youtube link from text', () => {
  const message = 'Check this out https://www.youtube.com/watch?v=nYFd7VHKyWQ';
  const output = formatMessage({ payload: { message } });

  expect(output.payload.message)
    .toBe('Check this out');

  expect(output.payload.videoLinks)
    .toEqual(['https://www.youtube.com/watch?v=nYFd7VHKyWQ']);
});

it('should extract image link from text', () => {
  const message = '>>> https://wscreenwallpapers.com/9.jpg looks awesome!';
  const output = formatMessage({ payload: { message } });

  expect(output.payload.message)
    .toBe('>>> looks awesome!');

  expect(output.payload.imageLinks)
    .toEqual(['https://wscreenwallpapers.com/9.jpg']);
});

it('should not change input text', () => {
  const message = 'Hey dude!';
  const output = formatMessage({ payload: { message } });

  expect(output.payload.message).toBe(message);
});