import { backendProxy } from "../common/infrastructure/backend.proxy"

export const incodeServices = {
  notifyEndProcess,
  notifyBeginProcess,
  isExpiratedLink,
}

async function isExpiratedLink(EntityIdOnboarding) {
  const result = await backendProxy.get(
    "/incode/is_valid_entityIdOnboarding",
    `${EntityIdOnboarding}`
  )
  return result.data.length !== 0
}

async function notifyEndProcess(EntityIdOnboarding) {
  await backendProxy.post("/incode/end_process", {
    EntityIdOnboarding,
  })
}

async function notifyBeginProcess(data) {
  return await backendProxy.post("/incode/begin_process", data)
}
