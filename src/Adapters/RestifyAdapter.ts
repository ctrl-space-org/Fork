import { injectable } from 'inversify'
import restify, { Server as Restify, RequestHandler } from 'restify'
import Server from '../Ports/Server'
import 'reflect-metadata'

@injectable()
class RestifyAdapter implements Server {
  private server: Restify ;

  public constructor () {
    console.log('express')

    this.server = restify.createServer()
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

  public listen (port: string = '80', fun: Function):void {
    this.server.listen(port, fun)
  }
}

export { RestifyAdapter }
