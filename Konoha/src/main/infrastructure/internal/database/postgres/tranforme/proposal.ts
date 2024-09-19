import { ProposalEntity } from "../../../../../domain/entity/proposal"
import { ProposalModel } from "../model/proposal"

function toProposalEntity(m: ProposalEntity) {
  return new ProposalModel(m.ID, m.address, m.admFee, m.billExpiration, m.broker, m.codOperator, m.contact, m.contractImplementation, m.contractPrice,
    m.contractReadjustment, m.cpf,m.dateOfBirth, m.dependents, m.email, m.holder, m.identity, m.lead, m.numberResident, m.office, m.plan, m.proposalNumber, 
    m.supervisor, m.typeOfContract, m.uf, m.whatsapp, m.zipCode, m.createdAt, m.updatedAt)
}

export {
  toProposalEntity
}