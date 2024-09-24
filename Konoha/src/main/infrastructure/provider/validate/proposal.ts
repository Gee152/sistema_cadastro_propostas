import { CreateProposalUseCaseRequest } from "../../../domain/usecase/ucio/proposal"
import { CreateProposalUseCaseValidateInterface, GetProposalUseCaseValidateInterface } from "../../../domain/usecase/validate/proposal"
import { checkStringEmpty, checkNumberEmpty, checkDateEmpty } from "./validate"

class CreateProposalUseCaseValidate implements CreateProposalUseCaseValidateInterface {
  createProposal(req: CreateProposalUseCaseRequest): string | null {
      if (checkStringEmpty(req.address)) return 'O endereço não pode ser vazia.'

      if (checkStringEmpty(req.codOperator)) return 'O código da operadora não pode ser vazio.'

      if (checkStringEmpty(req.holder)) return "Você precisa informar se a informar o titular do contrato."

      if (checkStringEmpty(req.cpf)) return 'O cpf não pode ser vazio.'

      if (checkStringEmpty(req.proposalNumber)) return 'Nº da proposta não pode ser vazio.'

      if (checkStringEmpty(req.whatsapp)) return 'O contato para whatsapp não pode ser vazio.'

      if (checkStringEmpty(req.zipCode)) return 'O cep não pode ser vazio.'

      if (checkStringEmpty(req.numberResident)) return 'O Nº da residencia não pode ser vazio.'

      if (checkStringEmpty(req.UF)) return 'O estado não pode ser vazio.'

      if (checkStringEmpty(req.contact)) return 'O contato telefonico não pode ser vazio.'

      if (checkStringEmpty(req.email)) return 'O email não pode ser vazio.'

      if (checkDateEmpty(req.contractReadjustment)) return 'A data de reajuste do contrato não pode ser vazio.'

      if (checkDateEmpty(req.dateOfBirth)) return 'A data de nascimento não pode ser vazia.'

      if (checkDateEmpty(req.contractImplementation)) return 'A data de implantação não pode ser vazia.'

      if (checkDateEmpty(req.billExpiration)) return 'A descrição não pode ser vazia.'

      if (checkNumberEmpty(req.contractPrice)) return 'O preço do contrato não pode ser vazio.'

      if (checkStringEmpty(req.lead)) return 'A descrição da lead não pode ser vazia.'

      if (checkStringEmpty(req.plan)) return 'O tipo de plano não pode ser vazio.'

      if (checkStringEmpty(req.typeOfContract)) return 'O tipo do contrato não pode ser vazio.'

      if (checkStringEmpty(req.office)) return 'O escritório não pode ficar vazio.'

      if (checkStringEmpty(req.broker)) return 'O nome do corretor não pode ser vazio.'

      if (checkNumberEmpty(req.admFee)) return 'A taxa adm não pode ser vazia.'

      if (checkStringEmpty(req.supervisor)) return 'O supervisornão pode ser vazia.'

      return null
  }
}

class GetProposalUseCaseValidate implements GetProposalUseCaseValidateInterface {
  getProposal(ID: number): string | null {
      if (checkNumberEmpty(ID)) {
          return "Você precisa informar um identificador."
      }

      return null
  }
}

export {
  CreateProposalUseCaseValidate,
  GetProposalUseCaseValidate
}