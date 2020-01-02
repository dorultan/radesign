import {combineReducers} from 'redux';

import user from './user';
import {reducer as formReducer} from 'redux-form';
import isAuthenticated from './isAuthenticated';
import projects from './projects';
import initialData from './initialData';
import project from './project';

const rootReducer = combineReducers({
	user,
	form: formReducer,
	projects,
	isAuthenticated,
	initialData,
	project
})

export default rootReducer;
