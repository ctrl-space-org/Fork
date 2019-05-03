// node-typescript/src/server.ts
// import express from 'express'
import restify from 'restify'

// import morgan from "morgan";
// import httpProxy from "express-http-proxy";
// import helmet from "helmet";

import routes from '../Core/routes'

// const server = express()
const server = restify.createServer()
// server.use(morgan("dev"));
// server.use(helmet());

routes(server)

export default server
