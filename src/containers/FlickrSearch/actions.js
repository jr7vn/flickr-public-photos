import axios from 'axios';
import {
  FLICKR_SEARCH_REQUEST,
  FLICKR_SEARCH_SUCCESS,
  FLICKR_SEARCH_FAILURE
} from './constants';

const api = process.env.REACT_APP_FLICKR_API || '';

export const searchRequest = keyword => {
  return async dispatch => {
    try {
      dispatch({
        type: FLICKR_SEARCH_REQUEST
      });
      const tags = keyword || '';
      const { data } = await axios.get(
        `${api}/api/flickr/search?tags=${tags}`
      );
      dispatch(searchSuccess(data));
    } catch (error) {
      dispatch(searchFailure(error));
    }
  };
};

export const searchSuccess = payload => {
  return async dispatch => {
    dispatch({
      type: FLICKR_SEARCH_SUCCESS,
      payload
    });
  }
};

export const searchFailure = error => {
  return async dispatch => {
    dispatch({
      type: FLICKR_SEARCH_FAILURE,
      error
    });
  }
};
