import { ProposalEntity } from "../../../../domain/entity/proposal"
import { Connection } from "./connection"
import { ProposalModel } from "./model/proposal"
import { toProposalEntity, toProposalModel } from "./tranforme/proposal"

async function createProposalData(e: ProposalEntity): Promise<ProposalEntity> {
  const repository = await Connection.getRepository(ProposalModel)
  const model = toProposalModel(e)
  const result = await repository.save(model)

  return toProposalEntity(result)
}

async function getProposalData(ID: number): Promise<ProposalEntity | null> {
  const repository = await Connection.getRepository(ProposalModel)
  const result = await repository.findOne({ where: { ID } })

  return result ? toProposalEntity(result) : null
}

export {
  createProposalData,
  getProposalData
}