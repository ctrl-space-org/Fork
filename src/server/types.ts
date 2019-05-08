import dotenv from 'dotenv'
dotenv.config()

// const key: (keyof ISomeObject) = 'secondKey';

const ServerTypes = { restify: Symbol('restify'), express: Symbol('express') }

function loadEnvRoute (): symbol {
  switch (process.env.ROUTER) {
    case 'restify':
      return ServerTypes.restify
    default:
      return ServerTypes.express
  }
}
const [ServerType, ApplicationType] = [loadEnvRoute(), Symbol('Application')]

export { ServerType, ApplicationType, ServerTypes }
