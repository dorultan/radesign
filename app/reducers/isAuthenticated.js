import {IS_AUTHENTICATED, LOG_OUT} from '../actions/types';

const isAuthenticated = (state = null, action) => {

  switch (action.type) {
    case IS_AUTHENTICATED:
      return action.payload;
      break;
    case LOG_OUT:
      return false;
      break;
    default:
      return state;
  }
  return state;
}

export default isAuthenticated;
