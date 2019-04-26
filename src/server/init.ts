//  "@types/readline-sync": "^1.4.3",
// "dotenv": "^7.0.0",

// https://www.npmjs.com/package/request-balancer
// https://www.npmjs.com/package/smart-request-balancer
import server from "./routes";
import dotenv from "dotenv";

dotenv.config();

const { SERVER_PORT } = process.env;

console.log(SERVER_PORT);
server.listen(SERVER_PORT, () => {
  console.log(`[SERVER] Starting server`);
  console.log(`[SERVER] Running at http://localhost:${SERVER_PORT}`);
});
