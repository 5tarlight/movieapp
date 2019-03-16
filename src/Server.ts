
import * as express from 'express'
import * as cors from'cors'

class Server {
  app: express.Application

  constructor() {
    this.app = express()

    this.app.use(cors())
    console.log('Setting complete.')
  }

  start(): void {
    this.app.listen(80, () => {
      console.log("Server On")
    })
  }
}

export default Server