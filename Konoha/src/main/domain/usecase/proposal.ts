import { TAG_PRE_CONDITION_ERROR, PreconditionError, TAG_INTERNAL_SERVER_ERROR, InternalServerError } from "../entity/error"
import { ProposalEntity } from "../entity/proposal"
import { CreateProposalUseCaseRepositoryInterface, GetProposalUseCaseRepositoryInterface } from "./repository/proposal"
import { CreateProposalUseCaseRequest, CreateProposalUseCaseResponse, GetProposalUseCaseRequest, GetProposalUseCaseResponse } from "./ucio/proposal"
import { CreateProposalUseCaseValidateInterface, GetProposalUseCaseValidateInterface } from "./validate/proposal"

class CreateProposalUseCase {
  public validate: CreateProposalUseCaseValidateInterface
  public repository: CreateProposalUseCaseRepositoryInterface

  constructor(validate: CreateProposalUseCaseValidateInterface,
      repository: CreateProposalUseCaseRepositoryInterface) {
      this.validate = validate
      this.repository = repository
  }

  async createProposal(req: CreateProposalUseCaseRequest): Promise<CreateProposalUseCaseResponse> {
      try {
          const messageError = await this.validate.createProposal(req)

          if (!messageError) {
              const now = new Date()

              const entity = new ProposalEntity(null, req.address, req.codOperator, req.holder, req.dependents, req.dateOfBirth, req.cpf, req.identity, req.proposalNumber, 
                req.whatsapp, req.zipCode, req.numberResident, req.UF, req.contact, req.email, req.contractReadjustment, req.contractImplementation, 
                req.billExpiration, req.contractPrice, req.lead, req.plan, req.typeOfContract, req.office, req.broker, req.admFee, req.supervisor, now, now)

              const data = await this.repository.createProposal(entity)

              return new CreateProposalUseCaseResponse(data, null)
          }
          else {
              console.log(TAG_PRE_CONDITION_ERROR, messageError)
              return new CreateProposalUseCaseResponse(null, new PreconditionError(messageError))
          }
      } catch (error: any) {
          console.log(TAG_INTERNAL_SERVER_ERROR, error.message)
          return new CreateProposalUseCaseResponse(null, new InternalServerError(error.message))
      }
  }
}

class GetProposalUseCase {
  public validate: GetProposalUseCaseValidateInterface
  public repository: GetProposalUseCaseRepositoryInterface

  constructor(validate: GetProposalUseCaseValidateInterface, repository: GetProposalUseCaseRepositoryInterface) {
      this.validate = validate
      this.repository = repository
  }

  async getProposal(req: GetProposalUseCaseRequest): Promise<GetProposalUseCaseResponse> {
      try {
          const messageError = this.validate.getProposal(req.ID)
          if (!messageError) {
              const Proposal = await this.repository.getProposal(req.ID)

              return new GetProposalUseCaseResponse(Proposal, null)
          } else {
              console.log(TAG_PRE_CONDITION_ERROR, messageError)
              return new GetProposalUseCaseResponse(null, new PreconditionError(messageError))
          }
      } catch (error: any) {
          console.log(TAG_INTERNAL_SERVER_ERROR, error)
          return new GetProposalUseCaseResponse(null, new InternalServerError(error.message))
      }
  }
}

export {
  CreateProposalUseCase,
  GetProposalUseCase
}
