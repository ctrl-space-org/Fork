import { Container } from 'inversify'
import Server from '../Ports/Server'
import { ExpressAdapter } from '../Adapters/ExpressAdapter'
import Routes from '../Core/Routes'
import Application from '../Ports/Application'
import 'reflect-metadata'
import { ServerType, ApplicationType } from './types'

let container = new Container()
container.bind<Server>(ServerType).to(ExpressAdapter)
container.bind<Application>(ApplicationType).to(Routes)

export default container.get<Application>(ApplicationType)
