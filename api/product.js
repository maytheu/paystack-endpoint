"use strict";

const Axios = require("../axios"),
  root = "product";
const { query } = require("../query");

const create = function (args) {
  if (
    !args.name ||
    !args.price ||
    !args.description ||
    !args.currency ||
    !args.quantity
  ) {
    throw new Error("Enter required field");
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

const fetch = function (id) {
  if (!id) {
    throw new Error("Product id  is required");
  }
  return Axios({ url: `${root}/${id}`, method: "get" });
};

const update = function (args, id) {
  if (!id) {
    throw new Error("Product id is required");
  }
  return Axios({
    url: `${root}/${id}`,
    method: "put",
    body: args,
  });
};

module.exports = { create, list, fetch, update };
