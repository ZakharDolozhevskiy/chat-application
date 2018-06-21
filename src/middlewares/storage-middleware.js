import * as exports from '../actions/settings';
import { saveState } from '../modules/localStorage';
import { extractConstants } from '../modules/helpers';

const trackingActions = extractConstants(exports);

const storageMiddleware = store => next => action => {
  next(action);

  if (trackingActions.some(type => type === action.type)) {
    saveState({ settings: store.getState().settings });
  }
};

export default storageMiddleware;