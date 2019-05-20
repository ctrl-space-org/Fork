import { ExpressAdapter } from './Adapter/ExpressAdapter'
import { RouterExpressAdapter } from './Adapter/RouterExpressAdapter'

import { Container } from 'inversify'
import 'reflect-metadata'
import { Server, Router, Plugins } from 'server-port'
import { ServerType, PluginsType, RouterType } from './Types'
import { PluginAdapter } from './Adapter/PluginAdapter'

export default function createBinds (container: Container): void{
  container.bind<Server>(ServerType).to(ExpressAdapter)
  container.bind<Plugins>(PluginsType).to(PluginAdapter)
  container.bind<Router>(RouterType).to(RouterExpressAdapter)
}

export { ExpressAdapter, PluginAdapter }
// export default container.get<Server>(ServerType)
// const router = container.get<Router>(RouterType)
// export { router }
