import storageMiddleware from '../storage-middleware';
import { CHANGE_LANGUAGE } from '../../actions/settings';

jest.mock('../../modules/localStorage');

describe('storage middleware', () => {
  const next = jest.fn();
  const store = { getState: jest.fn(() => ({})) };
  const middleware = storageMiddleware(store)(next);

  it('should get settings from store and save to local storage', () => {
    middleware({ type: CHANGE_LANGUAGE });

    expect(store.getState).toHaveBeenCalled();
    expect(next).toHaveBeenCalled();

    next.mockReset();
    store.getState.mockReset();
  });

  it('should call next callback for each case', () => {
    middleware({ type: '...' });
    expect(store.getState).not.toHaveBeenCalled();
    expect(next).toHaveBeenCalled();
  });
});