beforeAll(() => {
  console.log("run before any test");
});
afterAll(() => {
  console.log("run after all test");
});

beforeEach(() => {
  console.log("run before each test");
});
afterEach(() => {
  console.log("run after each test");
});
describe("new test block", () => {
  it("test 1", () => {});
  it("test 2", () => {});
});

describe("new test block 2", () => {
  it("test 1", () => {});
  it("test 2", () => {});
});
