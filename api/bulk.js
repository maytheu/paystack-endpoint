"use strict";

const Axios = require("../axios"),
  root = "bulkcharge";
const { query } = require("../query");

const initiate = function (arr) {
  if (typeof arr === "object") {
    return Axios({ url: root, method: "post", body: arr });
  }
  throw new Error("must contain an empty array");
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
    throw new Error("Charge id or code is required");
  }
  return Axios({ url: `${root}/${id}`, method: "get" });
};

const fetchCharges = function (args, id) {
  if (!id) {
    throw new Error("Transfer id or code is required");
  }
  let param;
  if (args) {
    param = query(args);
  }
  return Axios({
    url: args ? `${root}/${id}?${param}/charges` : `${root}/${id}/charges`,
    method: "get",
  });
};

const pause = function (code) {
  if (!code) {
    throw new Error("Batch code is required");
  }
  return Axios({ url: `${root}/pause/${code}`, method: "get" });
};

const resume = function (code) {
  if (!code) {
    throw new Error("Batch code is required");
  }
  return Axios({ url: `${root}/resume/${code}`, method: "get" });
};

module.exports = { initiate, list, fetch, fetchCharges, pause, resume };
