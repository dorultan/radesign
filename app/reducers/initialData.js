import {INITIALIZE_PROJECT_FORM, REMOVE_INITIAL_DATA, UPDATE_PROJECT} from '../actions/types';

const initialData = (state = null, action) => {
  switch (action.type) {
    case INITIALIZE_PROJECT_FORM:
      return action.payload;

      break;
    case REMOVE_INITIAL_DATA:
      return action.payload;
      break;

    case UPDATE_PROJECT:
      return action.payload;
      break

    default:
      return state;
  }
  return state;
}

export default initialData;
