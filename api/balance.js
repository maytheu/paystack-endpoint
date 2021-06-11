"use strict";

const Axios = require("../axios"),
  root = "balance";

const check = function () {
  return Axios({ url: root, method: "get" });
};

const fetch = function () {
  return Axios({ url: `${root}/ledger`, method: "get" });
};

module.exports = { check, fetch };
