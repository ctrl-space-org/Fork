// https://www.npmjs.com/package/request-balancer
// https://www.npmjs.com/package/smart-request-balancer
import server from "./server";
import dotenv from "dotenv";

dotenv.config();

const { SERVER_PORT } = process.env;

console.log(SERVER_PORT);
server.listen(SERVER_PORT, () => {
  console.log(`[SERVER] Starting server`);
  console.log(`[SERVER] Running at http://localhost:${SERVER_PORT}`);
});
