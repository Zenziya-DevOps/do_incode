import { backendProxy } from '../common/infrastructure/backend.proxy';

export const incodeServices = {
  notifyEndProcess,
  notifyBeginProcess
};

async function notifyEndProcess(EntityIdOnboarding) {
  await backendProxy.post('/incode/end_process', {
    EntityIdOnboarding
  });
}

async function notifyBeginProcess(data) {
  await backendProxy.post('/incode/begin_process', data);
}
