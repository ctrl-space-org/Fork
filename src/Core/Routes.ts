import ServerRoutes from '../Ports/ServerRoutes'
import { injectable } from 'inversify'
import 'reflect-metadata'

@injectable()
export default class Routes implements ServerRoutes {
  public createRoutes (server: import('../Ports/Server').default): void {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    server.get('/', (req: any, res: any, next: Function) => {
      req
      res.send('asaaa')
      next
    })
  }
}
