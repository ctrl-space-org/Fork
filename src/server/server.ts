// node-typescript/src/server.ts
import express from "express";
import morgan from "morgan";
// import httpProxy from "express-http-proxy";
import helmet from "helmet";

import routes from "../Core/routes";
const server = express();

server.use(morgan("dev"));
server.use(helmet());

routes(server._router);

export default server;
