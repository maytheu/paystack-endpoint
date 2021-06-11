"use strict";

const Axios = require("../axios"),
  root = "settlement";
const { query } = require("../query");

const fetch = function (args) {
  let param;
  if (args) {
    param = query(args);
  }
  return Axios({
    url: args ? `${root}?${param}` : root,
    method: "get",
  });
};

const fetchTransaction = function (args, id) {
  if (!id) {
    throw new Error("Settlementid is required");
  }
  let param;
  if (args) {
    param = query(args);
  }
  return Axios({
    url: args
      ? `${root}/${id}/transactions?${param}`
      : `${root}/${id}/transactions`,
    method: "get",
  });
};

module.exports = { fetch, fetchTransaction };
