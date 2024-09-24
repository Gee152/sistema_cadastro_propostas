import  express from "express"
import { CreateProposalRouter } from "./proposal"

class Router {
  constructor(app: express.Router) {
    app.use(new CreateProposalRouter().getRouter())
  }
}

export {
  Router
}