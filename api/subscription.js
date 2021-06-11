"use strict";

const Axios = require("../axios"),
  root = "subscription";
const { query } = require("../query");

const create = function (args) {
  if (!args.plan || !args.customer) {
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
    throw new Error("subscription id or code is required");
  }
  return Axios({ url: `${root}/${id}`, method: "get" });
};

const enable = function (code, token) {
  if (!code || !token) {
    throw new Error("Enter required field");
  }
  return Axios({
    url: `${root}/enable`,
    body: { code, token },
    method: "post",
  });
};

const disable = function (code, token) {
  if (!code || !token) {
    throw new Error("Enter required field");
  }
  return Axios({
    url: `${root}/disable`,
    body: { code, token },
    method: "post",
  });
};

module.exports = { create, list, fetch, enable, disable };
