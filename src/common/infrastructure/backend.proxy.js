import axios from 'axios';

let AUTHENTICATE_URL = process.env.REACT_APP_AUTHENTICATE_URL;
let API_URL = process.env.REACT_APP_API_URL; //'http://localhost:3000'; //

export const backendProxy = {
  post
};

async function post(uri, data) {
  var token = await getToken();
  var headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  };
  await axios.post(`${API_URL}${uri}`, data, { headers });
}

async function getToken() {
  var fullUrl = `${AUTHENTICATE_URL}/identity/authenticate`;
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: process.env.REACT_APP_USERNAME,
      password: process.env.REACT_APP_PASSWORD
    })
  };
  const returnedData = await fetch(fullUrl, requestOptions);
  let result = await returnedData.text();
  return result;
}
