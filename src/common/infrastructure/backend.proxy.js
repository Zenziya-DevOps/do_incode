import axios from 'axios';

let AUTHENTICATE_URL = process.env.AUTHENTICATE_URL;
let API_URL = process.env.API_URL; //'http://localhost:3000'; //

export const backendProxy = {
  post
};

async function post(uri, data) {
  var token = await login();
  var headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  };
  await axios.post(`${API_URL}${uri}`, data, { headers });
}

async function login() {
  var token = localStorage.getItem('token') || (await getToken());

  if (!localStorage.getItem('token')) localStorage.setItem('token', token);

  return token;
}

async function getToken() {
  var fullUrl = `${AUTHENTICATE_URL}/identity/authenticate`;
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: process.env.USERNAME,
      password: process.env.PASSWORD
    })
  };
  const returnedData = await fetch(fullUrl, requestOptions);
  let result = await returnedData.text();
  return result;
}
