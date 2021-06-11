"use strict";

const Axios = require("../axios");
const verifyBvn = function (args) {
  if (!args.bvn || !args.account_number || !args.bank_code) {
    throw new Error(" Enter required field");
  }
  if (args.bvn.length === 11 && args.account_number.length === 10) {
    return Axios({
      url: "bvn/match",
      method: "post",
      body: args,
    });
  }
  throw new Error("Enter a valid bvn");
};

const resolveAccount = function (account_number, bank_code) {
  if (!account_number || !bank_code) {
    throw new Error("Enter required field");
  }
  if (account_number.length === 10) {
    return Axios({
      url: `bank/resolve?account_number=${account_number}&bank_code=${bank_code}`,
      method: "get",
    });
  }
  throw new Error("Enter a valid account number");
};

const resolveCardBin = function (card) {
  if (!card) {
    throw new Error("Card is required");
  }
  if (card.length === 6) {
    return Axios({ url: `decision/bin/${card}`, method: "get" });
  }
  throw new Error("card must be first 6 digit");
};

module.exports = { verifyBvn, resolveAccount, resolveCardBin };
