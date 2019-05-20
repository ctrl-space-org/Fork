import { Container } from 'inversify'
import Application from '../Core/Application'
import ApplicationInterface from '../Ports/ApplicationInterface'
import 'reflect-metadata'
import { ServerTypes, ApplicationType } from './types'
import dotenv from 'dotenv'
import { Server } from 'server-port'
// import restify from '../Adapters/Restify'
import createBinds, { ExpressAdapter } from '../Adapters/Express'

dotenv.config()

let container = new Container()
createBinds(container)
container.bind<Server>(ServerTypes.express).to(ExpressAdapter)

// container.bind<Server>(ServerTypes.restify).to(restify)
container.bind<ApplicationInterface>(ApplicationType).to(Application)

export default container.get<ApplicationInterface>(ApplicationType)
