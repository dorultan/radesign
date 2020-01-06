import {FETCH_PROJECTS, DELETE_PROJECT, UPDATE_PROJECT, FETCH_PROJECT} from '../actions/types';

const projects = (state = null, action) => {

  switch (action.type) {
    case FETCH_PROJECTS:

      return action.payload.data;
      break;
    case DELETE_PROJECT:
      return state.filter((item) => item._id !== action.payload.data._id)
      break;
    default:

      break;
      return state;
  }

  return state;
}

export default projects;
