import { UserBrokerEntity } from "../../../../../domain/entity/userBroker"
import { UserBrokerModel } from "../model/userBroker"

function toPUserBrokerEntity(m: UserBrokerEntity) {
  return new UserBrokerEntity(m.ID, m.name, m.email, m.password, m.createdAt, m.updatedAt)
}

function toPUserBrokerModel(e: UserBrokerModel) {
  return new UserBrokerModel(e.ID, e.name, e.email, e.password, e.createdAt, e.updatedAt)
}

export {
  toPUserBrokerEntity,
  toPUserBrokerModel
}