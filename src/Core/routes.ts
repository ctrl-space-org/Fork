import { Router } from "express";

export default function routes(server: Router): void {
  console.log("teste");
  server.get("/", (_, res) => {
    res.send("First Test2");
  });
}
