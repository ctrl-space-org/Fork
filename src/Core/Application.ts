import ApplicationInterface from '../Ports/ApplicationInterface'
import { injectable, inject } from 'inversify'
import { ServerType } from '../server/types'
import morgan from 'morgan'
import helmet from 'helmet'
import 'reflect-metadata'
import { Server, Response, Request } from 'server-port'

// TODO: Modularizar essa parte
@injectable()
export default class Application implements ApplicationInterface {
 public server:Server;

 public constructor (
    @inject(ServerType) server: Server
 ) {
   this.server = server
   this.server.use(morgan('dev'))
   this.server.use(helmet())
 }

 public init (): void {
   this.server.get('/', (req: Request, res:Response):void => { res.json({ att: 'test2e' }) })
 }
}
