"use strict";

const Axios = require("../axios"),
  root = "refund";
const { query } = require("../query");

const create = function (args) {
  if (!args.transaction) {
    throw new Error("Transaction reference or id is required");
  }
  return Axios({ url: root, body: args, method: "post" });
};

const list = function (args) {
  let param;
  if (args) {
    param = query(args);
  }
  return Axios({ url: args ? `${root}?${param}` : root, method: "get" });
};

const fetch = function (reference) {
  if (!reference) {
    throw new Error("Invoice id or code is required");
  }
  return Axios({ url: `${root}/${reference}`, method: "get" });
};

module.exports = { create, list, fetch };
