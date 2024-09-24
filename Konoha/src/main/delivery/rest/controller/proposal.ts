import { Request, Response } from 'express'

import { CreateProposalUseCaseRequest, GetProposalUseCaseRequest } from "../../../domain/usecase/ucio/proposal"
import { CreateProposalUseCaseRepository, GetProposalUseCaseRepository } from "../../../infrastructure/provider/repository/proposal"
import { CreateProposalUseCaseValidate, GetProposalUseCaseValidate } from "../../../infrastructure/provider/validate/proposal"
import { SuccessResponse } from "../response/response"
import { CreateProposalUseCase, GetProposalUseCase } from '../../../domain/usecase/proposal'

class CreateProposalController {
  async createProposal(req: Request, res: Response): Promise<void> {
      const { address, codOperator, holder, dependents, dateOfBirth, cpf, identity, proposalNumber, 
        whatsapp, zipCode, numberResident, UF, contact, email, contractReadjustment, contractImplementation,
        billExpiration, contractPrice, lead, plan, typeOfContract, office, broker, admFee, supervisor } = req.body

      const ucReq = new CreateProposalUseCaseRequest(address, codOperator, holder, dependents, dateOfBirth, cpf, identity, proposalNumber, 
        whatsapp, zipCode, numberResident, UF, contact, email, contractReadjustment, contractImplementation, 
        billExpiration, contractPrice, lead, plan, typeOfContract, office, broker, admFee, supervisor)

      const validate = new CreateProposalUseCaseValidate()
      const repository = new CreateProposalUseCaseRepository()
      const usecase = new CreateProposalUseCase(validate, repository)

      const ucRes = await usecase.createProposal(ucReq)

      new SuccessResponse().success(res, ucRes)
  }
}

class GetProposalController {
  async getProposal(req: Request, res: Response): Promise<void> {
      const { ID } = req.body

      const ucReq = new GetProposalUseCaseRequest(ID)
      const validate = new GetProposalUseCaseValidate()
      const repository = new GetProposalUseCaseRepository()
      const usecase = new GetProposalUseCase(validate, repository)
      
      const ucRes = await usecase.getProposal(ucReq)

      new SuccessResponse().success(res, ucRes)
  }
}

export {
  CreateProposalController,
  GetProposalController
}