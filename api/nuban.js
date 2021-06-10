"use strict";

const Axios = require("../axios"),
  root = "dedicated_account";
const { query } = require("../query");

const create = function (args) {
  if (!args.customer || !args.preferred_bank) {
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
  return Axios({ url: args ? `${root}?${param}` : root, method: "get" });
};

const fetch = function (id) {
  if (!id) {
    throw new Error("Dedicated account id is required");
  }
  if (typeof id === Number) {
    return Axios({ url: `${root}/${id}`, method: "get" });
  }
  throw new Error("id must be integer");
};

const deactivate = function (id) {
  if (!id) {
    throw new Error("Dedicated account id is required");
  }
  if (typeof id === Number) {
    return Axios({ url: `${root}/${id}`, method: "delete" });
  }
  throw new Error("id must be integer");
};

const split = function (args) {
  if (!args.customer || !args.preferred_bank || !args.split_code) {
    throw new Error("Enter required field");
  }
  return Axios({
    url: `${root}/split`,
    method: "post",
    body: args,
  });
};

const removeSplit = function (account_number) {
  if (!account_number) {
    throw new Error("Dedicated account number is required ");
  }
  return Axios({
    url: `${root}/split`,
    method: "post",
    body: { account_number },
  });
};

const fetchBank = function () {
  return Axios({ url: `${root}/available_providers`, method: "get" });
};

module.exports = {
  create,
  list,
  fetch,
  deactivate,
  split,
  removeSplit,
  fetchBank,
};
