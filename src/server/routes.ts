// node-typescript/src/server.ts
import express, { Response, Request } from "express";

const server = express();

const logger = function(req: Request, res: Response, next: Function) {
  const { method, url, body } = req;
  res;
  console.log(method, url, body || "");
  next();
};

server.use(logger);

server.get("/", (_, res) => {
  res.send("First Test2");
});

export default server;
