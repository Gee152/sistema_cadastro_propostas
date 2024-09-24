import { ProposalEntity } from "../../../domain/entity/proposal"
import { CreateProposalUseCaseRepositoryInterface, GetProposalUseCaseRepositoryInterface } from "../../../domain/usecase/repository/proposal"
import { createProposalData, getProposalData } from "../../internal/database/postgres/proposal"

class CreateProposalUseCaseRepository implements CreateProposalUseCaseRepositoryInterface {
  async createProposal(e: ProposalEntity): Promise<ProposalEntity> {
    return await createProposalData(e)
  }
}

class GetProposalUseCaseRepository implements GetProposalUseCaseRepositoryInterface {
  async getProposal(ID: number): Promise<ProposalEntity | null> {
    return await getProposalData(ID)
  }
}

export {
  CreateProposalUseCaseRepository,
  GetProposalUseCaseRepository
}