import req from "supertest";
import server from "../routes";
test("[GET] /", async () => {
  const res = await req(server).get("/");

  expect(res.status).toEqual(200);
});
