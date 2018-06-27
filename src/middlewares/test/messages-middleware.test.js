import messagesMiddleware from '../messages-middleware';
import { MESSAGE_READ, MESSAGE_SEND } from '../../actions/messages';

jest.mock('../../modules/formatter');

describe('messages middleware', () => {
  const next = jest.fn();
  const middleware = messagesMiddleware()(next);

  it('should apply formatter for activities with type MESSAGE_READ', () => {
    middleware({ type: MESSAGE_READ });
    expect(next.mock.calls[0][0]).toHaveProperty('formatted', true);
    next.mockReset();
  });

  it('should apply formatter for activities with type MESSAGE_READ', () => {
    middleware({ type: MESSAGE_SEND });
    expect(next.mock.calls[0][0]).toHaveProperty('formatted', true);
    next.mockReset();
  });

  it('should ignore other activities', () => {
    middleware({ type: '...' });
    expect(next.mock.calls[0][0]).not.toHaveProperty('formatted', true);
  });
});