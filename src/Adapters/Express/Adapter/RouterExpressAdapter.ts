import { injectable } from 'inversify'
import { RequestHandler, Router as RouterEX } from 'express'
import 'reflect-metadata'
import { Router } from 'server-port'

@injectable()
class RouterExpressAdapter implements Router {
  private router: RouterEX ;

  public constructor (router: RouterEX) {
    this.router = router
  }

  public post (path: string, handler: RequestHandler): void {
    this.router.post(path, handler)
    this.router.post(path, handler)
  }

  public get (path: string, handler: RequestHandler): void {
    this.router.get(path, handler)
  }

  public path (path: string, handler: RequestHandler): void {
    this.router.get(path, handler)
  }

  public patch (path: string, handler: RequestHandler): void {
    this.router.get(path, handler)
  }

  public use (handler: RequestHandler): void {
    this.router.use(handler)
  }
}

export { RouterExpressAdapter }
