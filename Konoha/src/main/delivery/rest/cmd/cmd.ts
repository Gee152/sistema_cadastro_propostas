import  express   from 'express'
import http from 'http'
import { PORT } from '../config/cmd'
import { Router } from '../router'

class cmdRes {
  private app: express.Application

  constructor() {
    this.app = express()
    this.router()
  }

  private router() {
    this.app.use(express.json())
    new Router(this.app)
  }

  public server(): void {
    const server = http.createServer(this.app)

    server.listen(PORT, ()=> {
      console.log(`Serve Running...At Port ${PORT}`)
    })
  }
}

export {
  cmdRes
}