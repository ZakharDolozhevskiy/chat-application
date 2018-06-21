import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import reducers from './reducers';
import { loadState } from './modules/localStorage';
import socketMiddleware from './middlewares/socket-middleware';
import storageMiddleware from './middlewares/storage-middleware';
import messagesMiddleware from './middlewares/messages-middleware';

export const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(reducers),
  loadState(),
  composeWithDevTools(
    applyMiddleware(
      socketMiddleware,
      storageMiddleware,
      messagesMiddleware,
      routerMiddleware(history)
    )
  )
);

export default store;
