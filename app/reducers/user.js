import {LOGIN_SUCCESS, LOGIN_ERROR} from '../actions/types';

const user = (state = null, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload.data;
      break;
    case LOGIN_ERROR:
      return action.payload;
    default:
      return state;
  }
  return state;
}

export default user;
