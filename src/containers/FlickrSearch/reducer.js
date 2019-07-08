import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import {
  FLICKR_SEARCH_REQUEST,
  FLICKR_SEARCH_SUCCESS,
  FLICKR_SEARCH_FAILURE
} from './constants';

const initialState = fromJS({
  loading: false,
  data: {},
  error: null
});

const flickrReducer = handleActions({
  [FLICKR_SEARCH_REQUEST]: state => state.set('loading', true),
  [FLICKR_SEARCH_SUCCESS]: (state, { payload }) => state.set('data', fromJS(payload)).set('loading', false).set('error', null),
  [FLICKR_SEARCH_FAILURE]: (state, { error }) => state.set('error', fromJS(error)).set('loading', false).set('data', fromJS({}))
}, initialState);

export default flickrReducer;