import { Router } from 'express'
import { CreateProposalController, GetProposalController } from '../controller/proposal'

class CreateProposalRouter {
  private router: Router

  constructor() {
    this.router = Router()

    /* this.router.post('/listCreateProposalsByAccountID', new ListCreateProposalsByAccountIDController().listCreateProposalsByAccountID)
    this.router.post('/listCreateProposalsActiveByAccountID', new ListCreateProposalsActiveByAccountIDController().listAdditionalDatasActiveByAccountID) */
    this.router.post('/createProposal', new CreateProposalController().createProposal)
    this.router.post('/getProposal', new GetProposalController().getProposal)
    /* this.router.post('/updateProposal', new UpdateProposalController().updateProposal)
    this.router.post('/deleteProposal', new DeleteProposalController().deleteProposal)
    
    this.router.post('/listProposalsWithPaginationByAccountID', new ListProposalsWithPaginationByAccountIDController().listProposalsWithPaginationByAccountID) */
  }

  getRouter(): Router {
    return this.router
  }
}

export {
  CreateProposalRouter
}