import { backendProxy } from "../common/infrastructure/backend.proxy"

export const incodeServices = {
  notifyEndProcess,
  notifyBeginProcess,
}

async function notifyEndProcess(entityIdOnboarding) {
  await backendProxy.post("/incode/end_process", {
    entityIdOnboarding,
  })
}

async function notifyBeginProcess(data) {
  await backendProxy.post("/incode/begin_process", data)
}
