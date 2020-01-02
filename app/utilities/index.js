// Format date day month year.
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
  const userInfoDecoded = window.atob(tokens[1]);
  const userInfoJson = JSON.parse(userInfoDecoded);

  return userInfoJson;
}


export const setToken = (token) => {

  window.localStorage.setItem('token', token);
  return token;
}

export const removeToken = () => {
  window.localStorage.removeItem('token');
}
