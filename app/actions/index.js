
import diff from 'object-diff';
import {decodeToken, setToken, removeToken} from '../utilities';

import {
	LOGIN_REQUEST, LOGIN_ERROR, LOG_OUT, LOGIN_SUCCESS,
	IS_AUTHENTICATED, CREATE_PROJECT, CREATE_PROJECT_ERROR,
	UPDATE_PROJECT, DELETE_PROJECT, FETCH_PROJECT, FETCH_PROJECTS,
	INITIALIZE_PROJECT_FORM, REMOVE_INITIAL_DATA,
	ADD_IMAGE_TO_GALLERY, REMOVE_IMAGE_FROM_GALLERY,
	GET_USER
} from './types';

import { Login, IsAuthenticated, CreateProject, FetchProjects,
DeleteProject, FetchProject, UpdateProject, UpdateProjectWithImage,
AddImageToGallery, RemoveImageFromGallery, GetUser } from '../api';

export const initializeProjectForm = (uid) => {
	return (dispatch) => {

		FetchProject(uid)
		.then((res) => {
			let data = res.data;

			const values = {
				uid: data.uid,
				name: data.name,
				description: data.description,
				previewUrl: window.origin + '/' + data.imageUrl,
				oldImagePath: data.imageUrl,
				tag: data.tag,
				color: data.color,
				for: "INITIALIZE_PROJECT_FORM"
			};

			dispatch({

				type: INITIALIZE_PROJECT_FORM,
				payload: values
			})
		})
	}
};

export const removeInitialData = () => {

	return (dispatch) => {

		dispatch({
			type: REMOVE_INITIAL_DATA,
			payload: null
		})
	}
}

export const createProject = (values) => {
	values.image = values.image[0];

	return (dispatch) => {

		CreateProject(values)

		.then((data) => {
			dispatch({
				type: CREATE_PROJECT,
				payload: data
			})
		})

		.catch(err => {
			dispatch({
				type: CREATE_PROJECT_ERROR,
				payload: err
			})
		})
	}
}

export const login = (username, password) => {

	return (dispatch) => {

		Login(username, password)

		.then(({data}) => {

				setToken(data.token)
				dispatch({
					type: LOGIN_SUCCESS,
					payload: decodeToken(data.token)
				})

				// dispatch({
				// 	type: IS_AUTHENTICATED,
				// 	payload: true
				// })
		})

		.catch((err) => {
			dispatch({
				type: LOGIN_ERROR,
				payload: null
			})

			dispatch({
				type: IS_AUTHENTICATED,
				payload: false
			})
		})
	}
}

export const logOut = () => {
	removeToken()

	return {
		type: LOG_OUT,
		payload: null
	}
}

export const updateProject = (props) => {

	return (dispatch) => {

		UpdateProject(props)

		.then((data) => {

			const values = {
				uid: data.uid,
				name: data.name,
				description: data.description,
				previewUrl: window.origin + '/' + data.imageUrl,
				oldImagePath: data.imageUrl,
				tag: data.tag,
				color: data.color,
				for: "INITIALIZE_PROJECT_FORM"
			};

			dispatch({
				type: UPDATE_PROJECT,
				payload: values
			})
		})
	}

}

export const addImageToGallery = (values) => {
	const payload = AddImageToGallery(values);

	return {
		type: ADD_IMAGE_TO_GALLERY,
		payload: payload
	}
}

export const removeImageFromGallery = (values) => {
	const payload = RemoveImageFromGallery(values);

	return {
		type: REMOVE_IMAGE_FROM_GALLERY,
		payload: payload
	}
}

export const updateProjectWithImage = (props) => {
	const payload = UpdateProjectWithImage(props);

	return {
		type: UPDATE_PROJECT,
		payload: payload
	}
}

export const getUser = () => {
	const payload = GetUser();

	return {
		type: GET_USER,
		payload: payload
	}
}

export const isAuthenticated = () => {

	return (dispatch) => {

		IsAuthenticated()

		.then(data => {
			dispatch({
				type: IS_AUTHENTICATED,
				payload: true
			})
		})

		.catch(err => {
			dispatch({
				type: IS_AUTHENTICATED,
				payload: false
			})
		})
	}
}

export const updateUsername = (uid, username) => {

	return (dispatch) => {

		UpdateUsername(uid, username)

		.then(({data}) => {
			window.localStorage.setItem('token', data.token);
		  let token = data.token;
		  const tokens = token.split('.');
		  const userInfoDecoded = window.atob(tokens[1]);
		  const userInfoJson = JSON.parse(userInfoDecoded);
			dispatch({
				type: 'UPDATE_USERNAME',
				payload: userInfoJson
			})
		})
	}
}

export const getUserData = () => {

		// return {
		// 	type: "GET_USER_DATA",
		// 	payload: userInfoJson.user
		// }
}

export const updateUserPassword = (uid, password) => {
	const payload = UpdateUserPassword(uid, password);

	return {
		type: UPDATE_USER_PASSWORD,
		payload: payload
	}
}

export const updateUserSocial = (uid, social) => {

	return (dispatch) => {
		UpdateUserSocial(uid, social)

		.then(({data}) => {

			window.localStorage.setItem('token', data.token);
		  let token = window.localStorage.getItem('token');
		  const tokens = token.split('.');
		  const userInfoDecoded = window.atob(tokens[1]);
		  const userInfoJson = JSON.parse(userInfoDecoded);

			dispatch({
				type: 'UPDATE_USER_SOCIAL',
				payload: userInfoJson.user
			})
		})
	}
}

export const updateUserEmail = (uid, email) => {
	return (dispatch) => {
		UpdateUserEmail(uid, email)

		.then(({data}) => {

			window.localStorage.setItem('token', data.token);
		  let token = window.localStorage.getItem('token');
		  const tokens = token.split('.');
		  const userInfoDecoded = window.atob(tokens[1]);
		  const userInfoJson = JSON.parse(userInfoDecoded);
			dispatch({
				type: 'UPDATE_USER_EMAIL',
				payload: userInfoJson
			})
		})
	}
}

export const updateUserAvatar = (uid, avatar) => {
	const payload = UpdateUserAvatar(uid, avatar);
	return {
		type: UPDATE_USER_AVATAR,
		payload: payload
	}
}

export const fetchProjects = () => {
	const payload = FetchProjects();

	return {
		type: FETCH_PROJECTS,
		payload: payload
	}
}

export const fetchProject = (uid) => {
	const payload = FetchProject(uid);

	return {
		type: FETCH_PROJECT,
		payload: payload
	}
}

export const deleteProject = (uid) => {
	const payload = DeleteProject(uid);

	return {
		type: DELETE_PROJECT,
		payload: payload
	}
}
