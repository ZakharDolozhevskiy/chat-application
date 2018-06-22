import { api } from '../config';
import { MESSAGE_SEND, readMessage } from '../actions/messages';

const socketsMiddleware = store => {
  const socket = window.io.connect(api.host);

  // socket.on(api.channel, payload => store.dispatch(
  //   readMessage(payload)
  // ));

  return next => action => {
    if (action.type === MESSAGE_SEND) {
      socket.emit(api.channel, action.payload);
    }

    next(action);
  };
};

export default socketsMiddleware;