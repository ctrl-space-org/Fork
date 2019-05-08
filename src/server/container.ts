import { Container } from 'inversify'
import Server from '../Ports/Server'
import Routes from '../Core/Routes'
import Application from '../Ports/Application'
import 'reflect-metadata'
import { ServerTypes, ApplicationType } from './types'
// import { RestifyAdapter } from '../Adapters/RestifyAdapter'
import { ExpressAdapter } from '../Adapters/ExpressAdapter'
import dotenv from 'dotenv'

dotenv.config()

let container = new Container()

container.bind<Server>(ServerTypes.express).to(ExpressAdapter)
// container.bind<Server>(ServerTypes.restify).to(RestifyAdapter)

container.bind<Application>(ApplicationType).to(Routes)

export default container.get<Application>(ApplicationType)
