import throttle from 'lodash.throttle';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import reducers from './reducers';
import socketMiddleware from './middlewares/socket-middleware';
import { loadState, saveState } from './utils/localStorage'

export const history = createBrowserHistory();

const middlewares = applyMiddleware(
  socketMiddleware,
  routerMiddleware(history)
);

const store = createStore(
  connectRouter(history)(reducers),
  loadState(),
  composeWithDevTools(middlewares)
);

store.subscribe(throttle(
  () => saveState({ settings: store.getState().settings })
), 1000);

export default store;
