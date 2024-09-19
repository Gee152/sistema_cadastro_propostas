import { ErrorEntity } from "../../entity/error"
import { UserBrokerEntity } from "../../entity/userBroker"

class CreateUserBrokerRequest {
  public name: string
  public email: string
  public password: string

  constructor(name: string, email: string, password: string) {
    this.name = name
    this.email = email
    this.password = password
  }
}

class CreateUserBrokerResponse {
  public userBroker: UserBrokerEntity | null
  public error: ErrorEntity | null

  constructor(userBroker: UserBrokerEntity | null, error: ErrorEntity | null) {
    this.userBroker = userBroker
    this.error = error
  }
}

export {
  CreateUserBrokerRequest,
  CreateUserBrokerResponse
}
