import {IS_AUTHENTICATED} from '../actions/types';

const isAuthenticated = (state = null, action) => {

  switch (action.type) {
    case "IS_AUTHENTICATED":
      return action.payload;
      break;
    default:
      return state;
  }
}

export default isAuthenticated;
