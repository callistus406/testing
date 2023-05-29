import { registerUser } from "../controllers/authController";
const mockRequest = () => {
  return {
    body: {
      name: "test User",
      email: "test@email.com",
      password: "password123#",
    },
  };
};
const mockResponse = () => {
  return {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
  };
};
describe("register user", () => {
  it("should register user", async () => {
    await registerUser();
  });
});
