import { injectable } from 'inversify'
import 'reflect-metadata'
import express, { Express, RequestHandler } from 'express'
import Server from '../Ports/Server'
import morgan from 'morgan'
import helmet from 'helmet'

@injectable()
class ExpressAdapter implements Server {
  private server: Express ;

  public constructor () {
    this.server = express()
    this.use(morgan('dev'))
    this.use(helmet())
  }

  public post (path: string, handler: RequestHandler): void {
    this.server.post(path, handler)
  }

  public get (path: string, handler: RequestHandler): void {
    this.server.get(path, handler)
  }

  public path (path: string, handler: RequestHandler): void {
    this.server.get(path, handler)
  }

  public patch (path: string, handler: RequestHandler): void {
    this.server.get(path, handler)
  }

  public use (handler: RequestHandler): void {
    this.server.use(handler)
  }

  public listen (port: string = '80', fun: Function):this {
    this.server.listen(port, fun)
    return this
  }
}

export { ExpressAdapter }
