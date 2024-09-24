import { CreateProposalUseCaseRequest } from "../ucio/proposal"

interface CreateProposalUseCaseValidateInterface {
  createProposal(req: CreateProposalUseCaseRequest): string | null
}

interface GetProposalUseCaseValidateInterface {
  getProposal(ID: number): string | null
}

export {
  CreateProposalUseCaseValidateInterface,
  GetProposalUseCaseValidateInterface
}