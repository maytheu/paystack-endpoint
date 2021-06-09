"use strict";

const Axios = require("../axios");

const createRecipient = function (args) {
  if (
    !args.name ||
    !args.account_number ||
    !args.bank_code ||
    !args.currency ||
    !args.type
  ) {
    throw new Error(" Enter required field");
  }
  if (args.account_number.length === 10) {
    return Axios({
      url: "transferrecipient",
      method: "post",
      body: args,
    });
  } else {
    throw new Error("Enter a valid bvn");
  }
};

const transfer = function (args) {
  if (!args.amount || !args.recipient) {
    throw new Error("Enter required field");
  }
  return Axios({
    url: "transfer",
    method: "post",
    body: { args },
  });
};

const finalizeTransfer = function (args) {
  if (!args.otp || !args.transfer_code) {
    throw new Error("Enter required field");
  }
  return Axios({
    url: "finalize_transfer",
    method: "post",
    body: args,
  });
};

const bulkTransfer = (args) => {
  if (!args.amount || !args.recipient) {
    throw new Error("Enter required field");
  }
  return Axios({
    url: "transfer",
    method: "post",
    body: args,
  });
};

module.exports = { bulkTransfer, transfer, finalizeTransfer, createRecipient };
