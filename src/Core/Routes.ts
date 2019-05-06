import ServerRoutes from '../Ports/ServerRoutes'
import { injectable, inject } from 'inversify'
import Server from '../Ports/Server'
import Types from '../Types/Types'
import { Request, Response } from '../Ports/http'

@injectable()
export default class Routes implements ServerRoutes {
  public server: Server

  public constructor (
    @inject(Types.Server) server: Server
  ) {
    this.server = server
  }

  public createRoutes (): void {
    this.server.get('/', (req: Request, res: Response):void => {
      res.send('asaaa')
    })
  }
}
