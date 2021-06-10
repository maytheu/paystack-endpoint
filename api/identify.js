"use strict";

const Axios = require("../axios");

//https://paystack.com/docs/identity-verification/resolve-account-number
const resolveAccNum = function ({ account_number, bank_code }) {
  if (!account_number || !bank_code) {
    throw new Error(" Enter required field");
  }
  if (account_number.length === 10) {
    return Axios({
      url: `bank/resolve?account_number=${account_number}&bank_code=${bank_code}`,
      method: "get",
    });
  } else {
    throw new Error("Enter a valid account number");
  }
};

const resolveCardBin = function ({ card }) {
  if (!card) {
    throw new Error(" card is required");
  }
  if (card.length === 6) {
    return Axios({ url: `decision/bin/${card}`, method: "get" });
  } else {
    throw new Error("card must be first 6 digit");
  }
};

const validateCustomer = function ({ bvn, first_name, last_name, customer, country }) {
  if (!bvn || !firstName || !lastName || !customer) {
    throw new Error(" Enter required field");
  }
  if (bvn.length === 11) {
    return Axios({
      url: `customer/${customer}/identification`,
      method: "post",
      body: {
        country,
        type: "bvn",
        value: bvn,
        first_name,
        last_name,
      },
    });
  } else {
    throw new Error("Enter a valid bvn");
  }
};

//https://paystack.com/docs/identity-verification/verify-bvn-match
const verifyBVNMatch = function (args) {
  if (!args.bvn || !args.account_number || !args.bank_code) {
    throw new Error(" Enter required field");
  }
  if (args.bvn.length === 11 && args.account_number.length === 10) {
    return Axios({
      url: "bvn/match",
      method: "post",
      body: args,
    });
  } else {
    throw new Error("Enter a valid bvn");
  }
};

module.exports = {
  resolveAccNum,
  resolveCardBin,
  verifyBVNMatch,
  validateCustomer,
};
