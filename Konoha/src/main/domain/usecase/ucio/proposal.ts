import { ErrorEntity } from "../../entity/error"
import { ProposalEntity } from "../../entity/proposal"

class CreateProposalUseCaseRequest {
  public address: string
  public codOperator: string
  public holder: string
  public dependents: string | null
  public dateOfBirth: Date
  public cpf: string
  public identity: string | null
  public proposalNumber: string
  public whatsapp: string
  public zipCode: string
  public numberResident: string
  public UF: string
  public contact: string
  public email: string
  public contractReadjustment: Date
  public contractImplementation: Date
  public billExpiration: Date
  public contractPrice: number
  public lead: string
  public plan: string
  public typeOfContract: string
  public office: string
  public broker: string
  public admFee: number
  public supervisor: string

  constructor(
    address: string,
    codOperator: string,
    holder: string,
    dependents: string | null,
    dateOfBirth: Date,
    cpf: string,
    identity: string | null,
    proposalNumber: string,
    whatsapp: string,
    zipCode: string,
    numberResident: string,
    UF: string,
    contact: string,
    email: string,
    contractReadjustment: Date,
    contractImplementation: Date,
    billExpiration: Date,
    contractPrice: number,
    lead: string,
    plan: string,
    typeOfContract: string,
    office: string,
    broker: string,
    admFee: number,
    supervisor: string
  ) {
    this.address = address
    this.codOperator = codOperator
    this.holder = holder
    this.dependents = dependents
    this.dateOfBirth = dateOfBirth
    this.cpf = cpf
    this.identity = identity
    this.proposalNumber = proposalNumber
    this.whatsapp = whatsapp
    this.zipCode = zipCode
    this.numberResident = numberResident
    this.UF = UF
    this.contact = contact
    this.email = email
    this.contractReadjustment = contractReadjustment
    this.contractImplementation = contractImplementation
    this.billExpiration = billExpiration
    this.contractPrice = contractPrice
    this.lead = lead
    this.plan = plan
    this.typeOfContract = typeOfContract
    this.office = office
    this.broker = broker
    this.admFee = admFee
    this.supervisor = supervisor
  }
}

class CreateProposalUseCaseResponse {
  public proposal: ProposalEntity | null
  public error: ErrorEntity | null

  constructor(proposal: ProposalEntity | null, error: ErrorEntity | null) {
    this.proposal = proposal
    this.error = error
  }
}

class GetProposalUseCaseRequest {
  public ID: number

  constructor(ID: number) {
      this.ID = ID
  }
}

class GetProposalUseCaseResponse {
  public proposal: ProposalEntity | null
  public error: ErrorEntity | null

  constructor(proposal: ProposalEntity | null, error: ErrorEntity | null) {
      this.proposal = proposal
      this.error = error
  }
}


export {
  CreateProposalUseCaseRequest,
  CreateProposalUseCaseResponse,
  GetProposalUseCaseRequest,
  GetProposalUseCaseResponse
}

