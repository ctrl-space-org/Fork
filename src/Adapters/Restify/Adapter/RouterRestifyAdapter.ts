import { injectable } from 'inversify'
import { Server as Restify, RequestHandler } from 'restify'
import 'reflect-metadata'
import { Router } from 'server-port'

@injectable()
class RouterRestifyAdapter implements Router {
  private server: Restify ;

  public constructor (router: Restify) {
    this.server = router
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
}

export { RouterRestifyAdapter }
