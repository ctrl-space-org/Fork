//  "@types/readline-sync": "^1.4.3",
// "dotenv": "^7.0.0",

// https://www.npmjs.com/package/request-balancer
// https://www.npmjs.com/package/smart-request-balancer
import server from "./routes";
server.listen(5000, () => {
  console.log(`[SERVER] Starting server`);
  console.log(`[SERVER] Running at http://localhost:5000`);
});
