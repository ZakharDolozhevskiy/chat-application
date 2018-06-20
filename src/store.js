import throttle from 'lodash.throttle';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';
import { loadState, saveState } from './utils/localStorage'

const store = createStore(
	reducers,
	loadState(),
	composeWithDevTools()
);

store.subscribe(throttle(
	() => saveState({ settings: store.getState().settings })
), 1000);

export default store;
