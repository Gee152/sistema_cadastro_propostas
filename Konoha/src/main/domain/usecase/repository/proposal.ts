import { ProposalEntity } from "../../entity/proposal"

interface CreateProposalUseCaseRepositoryInterface {
  createProposal(Proposal: ProposalEntity): Promise<ProposalEntity>
}

interface GetProposalUseCaseRepositoryInterface {
  getProposal(ID: number): Promise<ProposalEntity | null>
}

export {
  CreateProposalUseCaseRepositoryInterface,
  GetProposalUseCaseRepositoryInterface
}