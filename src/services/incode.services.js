import { backendProxy } from '../common/infrastructure/backend.proxy';

export const incodeServices = {
  notifyEndProcess,
  notifyBeginProcess
};

async function notifyEndProcess() {}

async function notifyBeginProcess() {
  await login();
}

async function login() {
  debugger;
  var asd = await backendProxy.post('/identity/authenticate', {
    username: process.env.USERNAME,
    password: process.env.PASSWORD
  });
  console.log(asd);
}
