import throttle from 'lodash.throttle';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';
import socketMiddleware from './middlewares/socket-middleware';
import { loadState, saveState } from './utils/localStorage'

const store = createStore(
	reducers,
	loadState(),
	composeWithDevTools(
		applyMiddleware(socketMiddleware)
	)
);

store.subscribe(throttle(
	() => saveState({ settings: store.getState().settings })
), 1000);

export default store;
