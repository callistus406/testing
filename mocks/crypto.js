const crypto = require("crypto");
// jest.mock("crypto");

async function getEncryption() {
  return crypto.randomBytes(20);
}
console.log(getEncryption());
module.exports = {
  getEncryption,
};
