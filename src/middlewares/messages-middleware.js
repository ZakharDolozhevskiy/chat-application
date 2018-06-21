import { formatMessage } from '../modules/formatter';
import { MESSAGE_READ, MESSAGE_SEND } from '../actions/messages';

const messagesMiddleware = () => next => action => {
  if (action.type === MESSAGE_SEND || action.type === MESSAGE_READ) {
    next(formatMessage(action));
  } else {
    next(action);
  }
};

export default messagesMiddleware;
