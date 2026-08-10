const request = require("supertest");
const app = require("./app");
 
describe("GET /hello", () => {
 
    test("should return Hello World", async () => {
 
        const response = await request(app).get("/hello");
 
        expect(response.statusCode).toBe(200);
 
        expect(response.body.message).toBe("Hello World");
    });
 
});
 
//expect(response.body.message).toBe("Hello World"); 
// make it to fail