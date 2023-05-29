test("addition test", () => {
  expect(2 + 2).toBe(4);
});
// assertions are number of expects in a test block
test("should return null", () => {
  const i = null;
  expect.assertions(2);
  expect(i).toBe(null);
  expect(i).toBeDefined();
});

const fruits = ["orange", "mango", "guava"];

test("should ", () => {
  // check if the array is defined
  expect(fruits).toBeDefined();
  //   check if fruit is an array
  expect(fruits).toBeInstanceOf(Array);
  expect(fruits.length).toBe(3);
  //   checks if array contains a given value
  expect(fruits).toContain("mango");
});

test("should ", () => {
  expect(() => getData()).toThrow("not found");
});

function getData() {
  throw new Error("not found");
}
