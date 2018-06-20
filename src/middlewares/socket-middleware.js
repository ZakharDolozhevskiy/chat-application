import { api } from '../config';
import { formatMessage } from '../utils/formatters';
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
			next({
				type: action.type,
				payload: formatMessage(action.payload),
				timestamp: new Date()
			});
			return;
		}

		next(action)
	};
};

export default socketMiddleware;