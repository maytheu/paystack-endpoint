"use strict";

const Axios = require("../axios"),
  root = "paymentrequest";
const { query } = require("../query");

const create = function (args) {
  if (!args.customer || !args.amount || !args.description || !args.due_date) {
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

const view = function (id) {
  if (!id) {
    throw new Error("Invoice id or code is required");
  }
  return Axios({ url: `${root}/${id}`, method: "get" });
};

const verify = function (code) {
  if (!code) {
    throw new Error("Invoice  code is required");
  }
  return Axios({ url: `${root}/verify/${code}`, method: "get" });
};

const notification = function (code) {
  if (!code) {
    throw new Error("Invoice code is required");
  }
  return Axios({ url: `${root}/notify/${id}`, method: "post" });
};

const total = function () {
  return Axios({ url: `${root}/totals`, method: "get" });
};

const finalize = function (id) {
  if (!id) {
    throw new Error("Invoice code is required");
  }
  return Axios({
    url: `${root}/finalize/${id}`,
    method: "post",
  });
};

const update = function (args, id) {
  if (!id) {
    throw new Error("Invoice code is required");
  }
  return Axios({
    url: `${root}/${id}`,
    method: "put",
    body: args,
  });
};

const archive = function (id) {
  if (!id) {
    throw new Error("Invoice code is required");
  }
  return Axios({
    url: `${root}/archive/${id}`,
    method: "post",
  });
};

module.exports = {
  create,
  list,
  fetch,
  update,
  view,
  verify,
  notification,
  total,
  finalize,
  archive,
};
