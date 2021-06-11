"use strict";

const Axios = require("../axios"),
  root = "dispute";
const { query } = require("../query");

const list = function (args) {
  let param;
  if (args) {
    param = query(args);
  }
  return Axios({ url: args ? `${root}?${param}` : root, method: "get" });
};

const fetch = function (id) {
  if (!id) {
    throw new Error("Transaction id is required");
  }
  return Axios({ url: `${root}/${id}`, method: "get" });
};

const listTransaction = function (id) {
  if (!id) {
    throw new Error("Dispute id is required");
  }
  return Axios({ url: `${root}/transaction/${id}`, method: "get" });
};

const update = function (args, id) {
  if (!id) {
    throw new Error("Dispute id is required");
  }
  return Axios({
    url: `${root}/${id}`,
    method: "put",
    body: args,
  });
};

const addEvidence = function (args, id) {
  if (!id) {
    throw new Error("Dispute id is required");
  }
  if (
    !args.customer_email ||
    !args.customer_name ||
    !args.customer_phone ||
    args.service_details
  ) {
    throw new Error("Enter required field");
  }
  return Axios({
    url: `${root}/${id}/evidence`,
    method: "post",
    body: args,
  });
};

const upload = function (id, file) {
  //todo file check
  if (!id) {
    throw new Error("Dispute id is required");
  }
  return Axios({
    url: `${root}/${id}/upload_url?upload_filename=${file}`,
    method: "get",
  });
};

const resolve = function (args, id) {
  if (!id) {
    throw new Error("Dispute id is required");
  }
  if (
    !args.resolution ||
    !args.message ||
    !args.refund_amount ||
    !args.uploaded_filename
  ) {
    throw new Error("Enter required field");
  }
  return Axios({
    url: `${root}/${id}/resolve`,
    method: "put",
    body: args,
  });
};

const exportDispute = function (args) {
  let param;
  if (args) {
    param = query(args);
  }
  return Axios({
    url: args ? `${root}/export?${param}` : `${root}/export`,
    method: "get",
  });
};

module.exports = {
  list,
  fetch,
  listTransaction,
  update,
  addEvidence,
  upload,
  resolve,
  exportDispute,
};
