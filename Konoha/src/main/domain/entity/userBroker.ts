class UserBrokerEntity {
  public ID: number | null
  public name: string
  public email: string
  public password: string
  public createdAt: Date | null
  public updatedAt: Date | null

  constructor(
    ID: number | null = null,
    name: string,
    email: string,
    password: string,
    createdAt: Date | null = null,
    updatedAt: Date | null = null
  ) {
    this.ID = ID
    this.name = name
    this.email = email
    this.password = password
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}

export { UserBrokerEntity }
