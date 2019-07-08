import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { isImmutable } from 'immutable';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import flickrReducer from './containers/FlickrSearch/reducer';

const logger = createLogger({
  stateTransformer: state => {
    const newState = {};
    for (let i of Object.keys(state)) {
      if (isImmutable(state[i])) {
        newState[i] = state[i].toJS();
      } else {
        newState[i] = state[i];
      }
    }
    return newState;
  }
});

const store =  createStore(
  combineReducers({
    flickrReducer
  }),
  compose(
    applyMiddleware(thunk, logger),
  )
);

export default store;
