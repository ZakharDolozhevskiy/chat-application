import { api } from '../config';
import formatMessage from '../utils/format-message';
import { MESSAGE_READ, MESSAGE_SEND, readMessage } from '../actions/messages';

const socketMiddleware = store => {
	const socket = window.io.connect(api.host);

	socket.on(api.channel, payload => store.dispatch(
		readMessage(payload)
	));

	return next => action => {
		if (action.type === MESSAGE_SEND) {
			socket.emit(api.channel, action.payload);
		}

		if (action.type === MESSAGE_SEND || action.type === MESSAGE_READ) {
			action = formatMessage(action);
		}

		next(action)
	};
};

export default socketMiddleware;