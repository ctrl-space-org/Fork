// https://www.npmjs.com/package/request-balancer
// https://www.npmjs.com/package/smart-request-balancer
import dotenv from 'dotenv'
import { Container } from 'inversify'
import Server from '../Ports/Server'
import TYPES from '../Types/Types'
import { ExpressAdapter } from '../Adapters/ExpressAdapter'
import { serverStart } from '../Helpers'
import Routes from '../Core/Routes'
import ServerRoutes from '../Ports/ServerRoutes'

dotenv.config()
const { SERVER_PORT } = process.env

var container = new Container()
container.bind<Server>(TYPES.Server).to(ExpressAdapter)
container.bind<ServerRoutes>(TYPES.ServerRoutes).to(Routes)

const server = container.get<Server>(TYPES.Server)
const serverRoutes = container.get<ServerRoutes>(TYPES.ServerRoutes)

serverRoutes.createRoutes(server)

server.listen(SERVER_PORT, (): void => serverStart(SERVER_PORT))
