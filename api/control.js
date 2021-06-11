"use strict";

const Axios = require("../axios"),
  root = "integration/payment_session_timeout";

const fetch = function () {
  return Axios({ url: root, method: "get" });
};

const update = function (timeout) {
  if (!timeout) {
    throw new Error("Enter time in seconds");
  }
  if (typeof timeout === "number") {
    return Axios({ url: root, method: "put", body: timeout });
  }
  throw new Error("time must be in seconds");
};

module.exports = { fetch, update };
