const crypto = require("crypto");
const { getEncryption } = require("../mocks/crypto");
jest.mock("crypto");
test("should mock data", async () => {
  //   crypto.randomBytes.mockResolvedValueOnce("bytes");
  //   alternative approach
  crypto.randomBytes.mockImplementationOnce(() => Promise.resolve("bytes"));
  const res = await getEncryption();
  //   console.log(res);
});

test("should  mock implementation", () => {
  const mockFn = jest
    .fn(() => "default")
    .mockImplementation(() => "first call")
    .mockImplementation(() => "second call");

  const res1 = mockFn();
  const res2 = mockFn();

  console.log(res1);
  console.log(res2);
});
test("should  mock implementation once", () => {
  const mockFn = jest
    .fn(() => "default")
    .mockImplementationOnce(() => "first call of mock 2")
    .mockImplementationOnce(() => "second call of mock 2");

  const res1 = mockFn();
  const res2 = mockFn();
  const res3 = mockFn();

  console.log(res1);
  console.log(res2);
  console.log(res3);
});

// js mock. mock the entire module while jest.spyOn mocks only a particular method in the module
test("should spyOn", async () => {
  jest.spyOn(crypto, "randomBytes").mockResolvedValueOnce("bytes i34");

  const res = await getEncryption();

  console.log(res);
});
