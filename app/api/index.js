import axios from 'axios';
import {decodeToken, hasToken, privateRequest} from '../utilities';

export const GetUser = () => {
	 let token = window.localStorage.getItem('token');

   return token ? decodeToken(token).user : null;
}

export const IsAuthenticated = (token) => {
  // This request will check if the user is authenticated.

  if(hasToken()) {

    return privateRequest().get('/user/isAuthenticated')
  }

  return new Promise((resolve, reject) => {
    reject();
  });

}

export const Login = (username, password) => {

  return axios.post('/user/auth/login', {
    username: username,
    password: password
  })
}

export const ReorderProject = (uid, index) => {

	return axios.put('/api/projects/reorder', {uid, index});
}

export const CreateProject = (values) => {
  const formData = new FormData();
  formData.append('image', values.image);
  formData.append('name', values.name);
  formData.append('description', values.description);
  formData.append('color', values.color);
  formData.append('tag', values.tag);

  const config = {
    headers: {
			'Content-Type': 'multipart/form-data'
    }
  };

  return privateRequest().post('/api/projects', formData, config)
}

export const FetchProjects = () => {

  return axios.get('/api/projects');
}

export const FetchProject = (uid) => {
  const payload = axios.get('/api/projects', {
    params: {
      uid
    }
  })

  return payload;
}

export const UpdateProjectWithImage = (props) => {
  const formData = new FormData();
  let payload;
  props.image = props.image[0];

  for(let prop in props) {
    formData.append(prop, props[prop]);
  }

  const config = {

      headers: {
  			'Content-Type': 'multipart/form-data'
      }

  }

  payload = axios.put('/api/projects', formData, config);

  return payload;
}

export const UpdateProject = (props) => {
  const payload = axios.put('/api/projects', props);
  return payload;
}

export const DeleteProject = (uid) => {

  return privateRequest().delete('/api/projects', {
    params: {
      uid: uid
    }
  })
}

export const AddImageToGallery = (values) => {
  const formData = new FormData();
  let config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }

  for(let key in values) {

    formData.append(key, values[key]);
  }

  return privateRequest().put('/api/projects/galery/add', formData, config)
}

export const RemoveImageFromGallery = (values) => {

  return privateRequest().put('/api/projects/galery/remove', values);
}
