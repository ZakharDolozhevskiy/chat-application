import * as Actions from '../messages';

test('sendMessage action', () => {
  const input = { user: 'me', message: 'hello' };
  const output = Actions.sendMessage(input);

  expect(output.type).toBe(Actions.MESSAGE_SEND);
  expect(output.payload).toEqual(input);
});

test('readMessage action', () => {
  const input = 'hello';
  const output = Actions.readMessage(input);

  expect(output.type).toBe(Actions.MESSAGE_READ);
  expect(output.payload).toEqual(input);
});