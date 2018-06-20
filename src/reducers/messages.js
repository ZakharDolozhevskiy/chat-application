import {
	MESSAGE_READ,
	MESSAGE_SEND
} from '../actions/messages';

const messages = (state = [], action) => {
	switch (action.type) {
		case MESSAGE_READ:
		case MESSAGE_SEND:
			return [...state, action.payload];
		default:
			return state
	}
};

export default messages;