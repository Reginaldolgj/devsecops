const request = require("supertest");
const app = require("./index.js");


describe("GET /", () => {
  test("O / deve ser acessível", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /user", () => {
    test("O /user nao existe", async () => {
      const response = await request(app).get("/user"); // Corrigido para /user
      expect(response.statusCode).toBe(404);
    });
});
