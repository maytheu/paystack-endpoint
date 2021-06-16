"use strict";

const Axios = require("../axios"),
  root = "transfer";
const { query } = require("../query");

const initiate = function (args) {
  if (!args.source || !args.amount || !args.recipient) {
    throw new Error("Enter required field");
  }
  if (args.source === "balance") {
    return Axios({ url: root, method: "post", body: args });
  }
  throw new Error("Check your data");
};

const finalize = function (transfer_code, otp) {
  if (!transfer_code || !otp) {
    throw new Error("Enter required field");
  }
  return Axios({
    url: `${root}/finalize_transfer`,
    method: "post",
    body: { transfer_code, otp },
  });
};

const initiateBulk = function (args) {
  if (!args.source || !args.transfers) {
    throw new Error("Enter required field");
  }
  if (typeof args.transfers !== "object") {
    throw new Error("Transfer should be an array of object");
  }
  if (args.source === "balance") {
    return Axios({ url: `${root}/bulk`, method: "post", body: args });
  }
  throw new Error("Transfer source should be 'balance'");
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
    throw new Error("Transfer id or code is required");
  }
  return Axios({ url: `${root}/${id}`, method: "get" });
};

const verify = function (reference) {
  if (!reference) {
    throw new Error("Transfer reference  is required ");
  }
  return Axios({ url: `${root}/verify/${reference}`, method: "get" });
};

const resendOtp = function (transfer_code, reason) {
  if (!transfer_code || !reason) {
    throw new Error("Enter required field");
  }
  if (reason === "resend_otp" || reason === "transfer") {
    return Axios({
      url: `${root}/resend_otp`,
      method: "post",
      body: { transfer_code, reason },
    });
  }
  throw new Error("Reason should be 'resend_otp' || 'transfer'");
};

const disableOtp = function () {
  return Axios({ url: `${root}/disable_otp`, method: "post" });
};

const disableOtpFinally = function (otp) {
  if (!otp) {
    throw new Error("Enter the otp sent");
  }
  return Axios({
    url: `${root}/disable_otp_finalize`,
    method: "post",
    nody: otp,
  });
};

const enableOtp = function () {
  return Axios({ url: `${root}/enable_otp`, method: "post" });
};

module.exports = {
  initiate,
  initiateBulk,
  finalize,
  list,
  fetch,
  verify,
  resendOtp,
  disableOtp,
  disableOtpFinally,
  enableOtp,
};
