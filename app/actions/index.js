
import diff from 'object-diff';
import {decodeToken, setToken} from '../utilities';

import {
	LOGIN_REQUEST, LOGIN_ERROR, LOG_OUT, LOGIN_SUCCESS,
	IS_AUTHENTICATED, CREATE_PROJECT, UPDATE_PROJECT,
	DELETE_PROJECT, FETCH_PROJECT, FETCH_PROJECTS,
	INITIALIZE_PROJECT_FORM, REMOVE_INITIAL_DATA,
	ADD_IMAGE_TO_GALLERY, REMOVE_IMAGE_FROM_GALLERY
} from './types';

import { Login, IsAuthenticated, CreateProject, FetchProjects,
DeleteProject, FetchProject, UpdateProject, UpdateProjectWithImage,
AddImageToGallery, RemoveImageFromGallery } from '../api';

export const initializeProjectForm = (id) => {
	return (dispatch) => {

		FetchProject(id)
		.then((res) => {
			let data = res.data;

			const values = {
				id: data._id,
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

	const payload = CreateProject(values);

	return {
		type: CREATE_PROJECT,
		payload: payload
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

				dispatch({
					type: IS_AUTHENTICATED,
					payload: true
				})
		})

		.catch((err) => {
			dispatch({
				type: LOGIN_ERROR,
				payload: {
					message: "Username or password is incorect"
				}
			})

			dispatch({
				type: IS_AUTHENTICATED,
				payload: false
			})
		})
	}
}

export const updateProject = (props) => {

	return (dispatch) => {

		UpdateProject(props)

		.then((data) => {

			const values = {
				id: data._id,
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

export const updateUsername = (id, username) => {

	return (dispatch) => {

		UpdateUsername(id, username)

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
	  let token = window.localStorage.getItem('token');
	  const tokens = token.split('.');
	  const userInfoDecoded = window.atob(tokens[1]);
	  const userInfoJson = JSON.parse(userInfoDecoded);

		return {
			type: "GET_USER_DATA",
			payload: userInfoJson.user
		}
}
export const getUser = () => {

	return (dispatch) => {

		GetUser()

		.then((res) => {
			dispatch({
				type: "GET_USER_DATA",
				payload: res.data.user
			})
		})
	}
}

export const updateUserPassword = (id, password) => {
	const payload = UpdateUserPassword(id, password);

	return {
		type: UPDATE_USER_PASSWORD,
		payload: payload
	}
}

export const updateUserSocial = (id, social) => {

	return (dispatch) => {
		UpdateUserSocial(id, social)

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

export const updateUserEmail = (id, email) => {
	return (dispatch) => {
		UpdateUserEmail(id, email)

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

export const updateUserAvatar = (id, avatar) => {
	const payload = UpdateUserAvatar(id, avatar);
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

export const fetchProject = (id) => {
	const payload = FetchProject(id);

	return {
		type: FETCH_PROJECT,
		payload: payload
	}
}

export const deleteProject = (id) => {
	const payload = DeleteProject(id);

	return {
		type: DELETE_PROJECT,
		payload: payload
	}
}
