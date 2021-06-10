"use strict";

const Axios = require("../axios"),
  root = "split";
const { query } = require("../query");

const create = function (args) {
  if (
    !args.name ||
    !args.currency ||
    !args.subaccounts ||
    !args.type ||
    !args.bearer_type ||
    !args.bearer_subaccount
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
  if (!args.name || !args.active) {
    throw new Error("Enter required field");
  }
  let param = query(args);
  return Axios({
    url: `${root}?${param}`,
    method: "get",
  });
};

const fetch = function (id) {
  if (!id) {
    throw new Error("Split id is required");
  }
  return Axios({
    url: `${root}/${id}`,
    method: "get",
  });
};

const update = function (args, id) {
  if (!id) {
    throw new Error("Split id is required");
  }
  return Axios({
    url: `${root}/${id}`,
    method: "put",
    body: args,
  });
};

const addSubaccount = function (subaccount, share, id) {
  if (!subaccount || !share || !id) {
    throw new Error("Enter required field");
  }
  return Axios({
    url: `${root}/${id}/subaccount/add`,
    method: "post",
    body: { share, subaccount },
  });
};

const removeSubaccount = function (subaccount, id) {
  if (!subaccount || !id) {
    throw new Error("Enter required field");
  }
  return Axios({
    url: `${root}/${id}/subaccount/remove`,
    method: "post",
    body: { subaccount },
  });
};

module.exports = {
  create,
  list,
  fetch,
  update,
  addSubaccount,
  removeSubaccount,
};
