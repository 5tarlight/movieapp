import * as express from 'express'
import * as cors from 'cors'

class Server {
  app: express.Application
  constructor() {
    this.app = express()

    this.app.use(cors())
  }
}

export default Server