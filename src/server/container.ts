import { Container } from 'inversify'
import Server from '../Ports/Server'
import TYPES from '../Types/Types'
import { ExpressAdapter } from '../Adapters/ExpressAdapter'
import Routes from '../Core/Routes'
import ServerRoutes from '../Ports/ServerRoutes'
import 'reflect-metadata'

var container = new Container()
container.bind<Server>(TYPES.Server).to(ExpressAdapter)
container.bind<ServerRoutes>(TYPES.ServerRoutes).to(Routes)

export default container.get<ServerRoutes>(TYPES.ServerRoutes)
