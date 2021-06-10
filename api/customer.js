"use strict";

const Axios = require("../axios"),
  root = "customer";
const { query } = require("../query");

const create = function (args) {
  if (!args.email || !args.first_name || !args.last_name) {
    throw new Error("Enter required field");
  }
  return Axios({ url: root, method: "post", body: args });
};

const list = function (args) {
  let param;
  if (args) {
    param = query(args);
  }
  return Axios({
    url: args ? `${root}?${param}` : root,
    method: "get",
  });
};

const fetch = function (email) {
  if (!email) {
    throw new Error("Email or code is required");
  }
  return Axios({ url: `${root}/${email}`, method: "get" });
};

const update = function (args, customer_code) {
  if (!customer_code) {
    throw new Error("Customer code is required ");
  }
  return Axios({ url: `${root}/${customer_code}`, method: "put", body: args });
};

const validate = function (country, bvn, customer_code, first_name, last_name) {
  if (!customer_code || !first_name || !last_name || !country || !bvn) {
    throw new Error("Enter required field");
  }
  return Axios({
    url: `${root}/${customer_code}/identification`,
    method: "post",
    body: {
      country,
      type: "bvn",
      value: bvn,
      first_name,
      last_name,
    },
  });
};

const blacklist = function (args) {
  if (!args.customer) {
    throw new Error("customer code is required");
  }
  return Axios({ url: `${root}/set_risk_action`, body: args, method: "post" });
};

const deactivateAuth = function (authorization_code) {
  if (!authorization_code) {
    throw new Error("authorization code is required");
  }
  return Axios({
    url: `${root}/deactivate_authorization`,
    body: { authorization_code },
    method: "post",
  });
};

module.exports = {
  create,
  list,
  fetch,
  update,
  validate,
  blacklist,
  deactivateAuth,
};
