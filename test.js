import request from "supertest";
import app from "./index.js";

describe("GET /", () => {
  test("O / deve ser acessível", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /user", () => {
    test("O /user nao existe", async () => {
      const response = await request(app).get("/");
      expect(response.statusCode).toBe(400);
    });
});
