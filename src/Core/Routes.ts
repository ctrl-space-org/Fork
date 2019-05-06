import Application from '../Ports/Application'
import { injectable, inject } from 'inversify'
import Server from '../Ports/Server'
import { Request, Response } from '../Ports/http'
import { ServerType } from '../server/types'

@injectable()
export default class Routes implements Application {
  public server: Server

  public constructor (
    @inject(ServerType) server: Server
  ) {
    this.server = server
  }

  public createRoutes (): void {
    this.server.get('/', (req: Request, res: Response):void => {
      res.send('asaaa')
    })
  }
}
