import { MESSAGE_READ, MESSAGE_SEND } from '../../actions/messages';
import { LOCATION_CHANGE } from 'connected-react-router';

import messages, { defaultState } from '../messages';

it('should return default state', () => {
  expect(messages(undefined, {})).toEqual(defaultState);
});

it('should reset counter if location changes', () => {
  const action = { type: LOCATION_CHANGE };
  const state = { count: 5 };

  expect(messages(state, action)).toEqual({ count: 0 });
});

it('should increase messages count and add data to state', () => {
  const send = { type: MESSAGE_SEND, payload: { a: 1 }};
  const read = { type: MESSAGE_READ, payload: { a: 2 }};

  expect(messages(undefined, send)).toEqual({
    count: 1,
    data: [send.payload]
  });

  expect(messages(undefined, read)).toEqual({
    count: 1,
    data: [read.payload]
  });
});