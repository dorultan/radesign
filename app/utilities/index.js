// Format date day month year.
import axios from 'axios'
export const formatDate = (date) => {
  date = new Date(date);
  // Month names.
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  // return day month name based on index and year.
  return `${day} ${monthNames[monthIndex]} ${year}`;
}

export const decodeToken = (token) => {
  const tokens = token.split('.');
  const tokenInfoDecoded = window.atob(tokens[1]);
  const tokenInfoJson = JSON.parse(tokenInfoDecoded);

  return tokenInfoJson;
}

export const hasToken = () => {
  const token = window.localStorage.getItem('token');

  if(token) {
    return true;
  }

  return false;
}

export const privateRequest = () => {
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

export const setToken = (token) => {

  window.localStorage.setItem('token', token);
  return token;
}

export const removeToken = () => {
  window.localStorage.removeItem('token');
}
