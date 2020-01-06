import {LOGIN_SUCCESS, LOGIN_ERROR, GET_USER, LOG_OUT} from '../actions/types';

const user = (state = null, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload;
      break;
    case GET_USER:
      return action.payload;
      break;
    case LOGIN_ERROR:
      return action.payload;
      break;
    case LOG_OUT:
      return action.payload;
    default:
      return state;
  }
  return state;
}

export default user;
