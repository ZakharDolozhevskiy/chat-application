import socketsMiddleware from '../sockets-middleware';
import { MESSAGE_SEND, MESSAGE_READ } from '../../actions/messages';
import { api } from '../../config';

describe('sockets middleware', () => {
  const msg = 'Hello!';
  const next = jest.fn();
  const dispatch = jest.fn();
  const mockedIO = { on: jest.fn(), emit: jest.fn() };

  window.io = { connect: () => mockedIO };

  const middleware = socketsMiddleware({ dispatch })(next);

  it('should initiate socket io connection', () => {
    const event = mockedIO.on.mock.calls[0][0];
    const callback = mockedIO.on.mock.calls[0][1];

    expect(event).toBe(api.channel);
    expect(typeof callback).toBe('function');
  });

  it('should initiate socket io connection', () => {
    const event = mockedIO.on.mock.calls[0][0];
    const callback = mockedIO.on.mock.calls[0][1];

    expect(event).toBe(api.channel);
    expect(typeof callback).toBe('function');
  });

  it('should trigger MESSAGE_READ action if get a message', () => {
    const callback = mockedIO.on.mock.calls[0][1];

    callback(msg);

    expect(dispatch.mock.calls[0][0])
      .toEqual({ type: MESSAGE_READ, payload: msg });
  });

  it('should send socket IO message if MESSAGE_SEND action received', () => {
    middleware({ type: MESSAGE_SEND, payload: msg });
    expect(mockedIO.emit.mock.calls[0][0]).toBe(api.channel);
    expect(mockedIO.emit.mock.calls[0][1]).toBe(msg);
  });

  it('should call next callback in each cases', () => {
    next.mockReset();
    middleware({ type: '...' });
    expect(next).toHaveBeenCalled();
  });
});