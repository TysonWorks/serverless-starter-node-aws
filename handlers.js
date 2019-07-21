require = require("esm")(module /* , options*/);

const { getHello } = require("./handlers/api");
const { lambdaHandler } = require("./handlers/handler");

module.exports = {
  getHello,
  lambdaHandler
};
