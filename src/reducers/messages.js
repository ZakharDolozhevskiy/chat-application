import { MESSAGE_READ, MESSAGE_SEND } from '../actions/messages';
import { LOCATION_CHANGE } from 'connected-react-router';

const defaultState = { count: 0, data: [] };

const messages = (state = defaultState, { type, payload }) => {
  if (type === LOCATION_CHANGE) {
    return { ...state, count: 0 };
  }

  if (type === MESSAGE_READ || type === MESSAGE_SEND) {
    return {
      count: state.count + 1,
      data: [ ...state.data, payload ]
    }
  }

  return state;
};

export default messages;