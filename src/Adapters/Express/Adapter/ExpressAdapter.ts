import { injectable, inject } from 'inversify'
import express, { Express, RequestHandler } from 'express'
import 'reflect-metadata'
import { Server, Router, Plugins } from 'server-port'
import { PluginsType } from '../Types'

@injectable()
class ExpressAdapter implements Server, Router {
  public plugins: Plugins;
  private server: Express ;

  public constructor (@inject(PluginsType) plugins:Plugins) {
    this.server = express()
    this.plugins = plugins
    // this.server.use(express.json())
    // this.server.use(express.urlencoded({ extended: true }))
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
export { ExpressAdapter }
