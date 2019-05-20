
import { Container } from 'inversify'
import 'reflect-metadata'
import { Server, Router, Plugins } from 'server-port'
import { ServerType, PluginsType, RouterType } from './Types'
import { PluginAdapter } from './Adapter/PluginAdapter'
import { RestifyAdapter } from './Adapter/RestifyAdapter'
import { RouterRestifyAdapter } from './Adapter/RouterRestifyAdapter'

let container = new Container()
container.bind<Server>(ServerType).to(RestifyAdapter)
container.bind<Plugins>(PluginsType).to(PluginAdapter)
container.bind<Router>(RouterType).to(RouterRestifyAdapter)

export default container.get<Server>(ServerType)
const router = container.get<Router>(RouterType)
export { router }
