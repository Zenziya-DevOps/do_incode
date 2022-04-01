//import fetch from 'node-fetch';

let url = process.env.AUTHENTICATE_URL;

export const backendProxy = {
  post
};

async function post(uri, data) {
  var fullUrl = `${url}${uri}`;
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };

  const returnedData = await fetch(fullUrl, requestOptions);
  return await returnedData.text();
}
