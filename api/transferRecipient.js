"use strict";

const Axios = require("../axios"),
  root = "transferrecipient";
const { query } = require("../query");

const create = function (args) {
  if (
    !args.name ||
    !args.account_number ||
    !args.bank_code ||
    !args.currency ||
    !args.type
  ) {
    throw new Error("Enter required field");
  }
  if (args.account_number.length === 10 && args.type === "nuban") {
    return Axios({ url: root, method: "post", body: args });
  }
  throw new Error("Check your data");
};

const bulkCreate = function (batch) {
  if (typeof batch !== "array") {
    throw new Error("Batch should be an array of object");
  }
  return Axios({ url: `${root}/bulk`, method: "post", body: args });
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
    throw new Error("Recipient id or code is required");
  }
  return Axios({ url: `${root}/${id}`, method: "get" });
};

const update = function (args, id) {
  if (!id) {
    throw new Error("Recipient id or code is required ");
  }
  return Axios({ url: `${root}/${id}`, method: "put", body: args });
};

const deleteRecipient = function (id) {
  if (!id) {
    throw new Error("Recipient id or code is required ");
  }
  return Axios({ url: `${root}/${id}`, method: "delete" });
};

module.exports = {
  create,
  list,
  fetch,
  update,
  deleteRecipient,
  bulkCreate,
};
