import {FETCH_PROJECT, ADD_IMAGE_TO_GALLERY, REMOVE_IMAGE_FROM_GALLERY} from '../actions/types';

const project = (state = null, action) => {

  switch (action.type) {
    case FETCH_PROJECT:

      return action.payload.data;
      break;
    case ADD_IMAGE_TO_GALLERY:

      return action.payload.data;
      break;

    case REMOVE_IMAGE_FROM_GALLERY:
      console.log(action.payload)
      return action.payload.data;
      break;

    default:
      return state;
  }

  return state;
}

export default project;
