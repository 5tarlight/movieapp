
import * as express from 'express'
import * as cors from 'cors'

class Server {
  app: express.Application

  constructor() {
    this.app = express()

    this.app.use(cors())
    this.app.use('/', express.static(__dirname + '/public'))

    console.log('Setting complete.')
  }

  route() {
    let router = express.Router()

    router.route('/').get((req: express.Request, res: express.Response) => {
      console.log(req.ip + ' : portal')
      res.sendFile(__dirname + '/public/portal.html')
    })

    this.app.use(router)
  }

  start(): void {
    this.app.listen(80, () => {
      console.log("Server On")
    })
  }
}

export default Server