import { ProposalEntity } from "../../../../../domain/entity/proposal"
import { ProposalModel } from "../model/proposal"

function toProposalEntity(m: ProposalEntity) {
  return new ProposalEntity(m.ID, m.address, m.codOperator, m.holder, m.dependents, m.dateOfBirth, m.cpf, m.identity, m.proposalNumber, m.whatsapp,
    m.zipCode, m.numberResident, m.UF, m.contact, m.email, m.contractReadjustment, m.contractImplementation, m.billExpiration, m.contractPrice, m.lead, 
    m.plan, m.typeOfContract, m.office, m.broker,m.admFee, m.supervisor, m.createdAt, m.updatedAt)
}

function toProposalModel(e: ProposalModel) {
  return new ProposalModel(e.ID, e.address, e.codOperator, e.holder, e.dependents, e.dateOfBirth, e.cpf, e.identity, e.proposalNumber, e.whatsapp,
    e.zipCode, e.numberResident, e.UF, e.contact, e.email, e.contractReadjustment, e.contractImplementation, e.billExpiration, e.contractPrice, e.lead, 
    e.plan, e.typeOfContract, e.office, e.broker,e.admFee, e.supervisor, e.createdAt, e.updatedAt)
}

export {
  toProposalEntity,
  toProposalModel
}