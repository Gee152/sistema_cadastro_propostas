import { UserBrokerEntity } from "../../../../domain/entity/userBroker"
import { Connection } from "./connection"
import { UserBrokerModel } from "./model/userBroker"
import { toPUserBrokerEntity, toPUserBrokerModel } from "./tranforme/userBroker"

async function createuserBrokerData(e: UserBrokerEntity): Promise<UserBrokerEntity> {
  const repository = await Connection.getRepository(UserBrokerModel)
  const model = toPUserBrokerModel(e)
  const result = await repository.save(model)

  return toPUserBrokerEntity(result)
}

export {
  createuserBrokerData
}