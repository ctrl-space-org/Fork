import { injectable, inject } from 'inversify'
import restify, { Server as Restify, RequestHandler } from 'restify'
import 'reflect-metadata'
import { Server, Router, Plugins } from 'server-port'
import { PluginsType } from '../Types'

@injectable()
class RestifyAdapter implements Server, Router {
  public plugins: Plugins;
  private server: Restify ;

  public constructor (@inject(PluginsType) plugins: Plugins) {
    this.server = restify.createServer()
    this.plugins = plugins
    // this.server.use(restify.plugins.jsonBodyParser())
    // this.server.use(restify.plugins.multipartBodyParser())
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
