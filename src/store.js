import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import reducers from './reducers';
import { loadState } from './modules/localStorage';
import socketsMiddleware from './middlewares/sockets-middleware';
import storageMiddleware from './middlewares/storage-middleware';
import messagesMiddleware from './middlewares/messages-middleware';

export const history = createBrowserHistory();

const middleware = applyMiddleware(
  socketsMiddleware,
  storageMiddleware,
  messagesMiddleware,
  routerMiddleware(history)
);

const store = createStore(
  connectRouter(history)(reducers),
  loadState(),
  composeWithDevTools(middleware)
);

export default store;
