"use strict";

const { query } = require("../query");

const Axios = require("../axios"),
  root = "transaction";

const initialize = function (args) {
  if (!args.email || !args.amount) {
    throw new Error("Enter required field");
  }
  return Axios({
    url: `${root}/initialize`,
    method: "post",
    body: args,
  });
};

const fetch = function (id) {
  if (!id) {
    throw new Error("Transaction id is required");
  }
  if (typeof id === "number") {
    return Axios({ url: `${root}/${id}`, method: "get" });
  }
  throw new Error("Transaction ID must be number");
};

const verify = function (reference) {
  if (!reference) {
    throw new Error("Transaction reference is required");
  }
  return Axios({
    url: `${root}/verify/${reference}`,
    method: "get",
  });
};

const list = function (args) {
  let param;
  if (args) {
    param = query(args);
  }
  return Axios({
    url: args ? root + "?" + param : root,
    method: "get",
  });
};

const chargeAuth = function (args) {
  if (!args.email || !args.amount || !args.authorization_code) {
    throw new Error("Enter required field");
  }
  return Axios({
    url: `${root}/charge_authorization`,
    method: "post",
    body: args,
  });
};

const checkAuth = function (args) {
  if (!args.email || !args.amount || !args.authorization_code) {
    throw new Error("Enter required field");
  }
  return Axios({
    url: `${root}/charge_authorization`,
    method: "post",
    body: args,
  });
};

const view = function (ref) {
  if (!ref) {
    throw new Error("Transaction reference or id is required");
  }
  return Axios({
    url: `${root}/timeline/${ref}`,
    method: "get",
  });
};

const total = function (args) {
  let param;
  if (args) {
    param = query(args);
  }

  return Axios({
    url: args ? `${root}/totals?${param}` : `${root}/totals`,
    method: "get",
  });
};

const exportTrans = function (args) {
  let param;
  if (args) {
    param = query(args);
  }
  return Axios({
    url: args ? `${root}/export?${param}` : `${root}/export`,
    method: "get",
  });
};

const partialDebit = function (args) {
  if (
    !args.email ||
    !args.amount ||
    !args.authorization_code ||
    !args.currency
  ) {
    throw new Error("Enter required field");
  }
  return Axios({
    url: `${root}/partial_debit`,
    method: "post",
    body: args,
  });
};

module.exports = {
  initialize,
  fetch,
  verify,
  list,
  chargeAuth,
  checkAuth,
  view,
  total,
  exportTrans,
  partialDebit,
};
