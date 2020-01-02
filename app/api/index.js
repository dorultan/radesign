import axios from 'axios';

const hasToken = () => {
  const token = window.localStorage.getItem('token');

  if(token) {
    return true;
  }

  return false;
}

const privateRequest = () => {
  const token = window.localStorage.getItem('token');
  // Check if is a token in the localStorage, so we can
  // send requests with the Authorization header.
  if(token) {
    const instance = axios.create({
			headers: {
				'Authorization': `bearer ${token}`
			}
		})
    return instance;
  }
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

export const CreateProject = (values) => {
  const formData = new FormData();
  formData.append('image', values.image);
  formData.append('name', values.name);
  formData.append('description', values.description);

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

export const FetchProject = (project_id) => {
  const payload = axios.get('/api/projects', {
    params: {
      project_id
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

export const DeleteProject = (id) => {

  return privateRequest().delete('/api/projects', {
    params: {
      id: id
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
