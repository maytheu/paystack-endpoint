"use strict";

const Axios = require("../axios"),
  root = "subaccount";
const { query } = require("../query");

const create = function (args) {
  if (
    !args.business_name ||
    !args.settlement_bank ||
    !args.account_number ||
    !args.percentage_charge
  ) {
    throw new Error("Enter required field");
  }
  return Axios({
    url: root,
    method: "post",
    body: args,
  });
};

const list = function (args) {
  let param;
  if (args) {
    param = query(args);
  }
  return Axios({ url: args ? `${root}?${param}` : root, method: get });
};

const fetch = function (id) {
  if (!id) {
    throw new Error("subaccount id or code is required");
  }
  return Axios({ url: `${root}/${id}`, method: "get" });
};

const update = function (args, id) {
  if (!id) {
    throw new Error("subaccount id or code is required");
  }
  return Axios({ url: `${root}/${id}`, method: "put", body: args });
};

module.exports = { create, list, fetch, update };
