"use strict";

const transaction = require("./api/transactions"),
  split = require("./api/split"),
  customer = require("./api/customer"),
  nuban = require("./api/nuban"),
  subaccount = require("./api/subaccount");

function Paystack(key) {
  if (!key) {
    throw new Error("key is required");
  }

  global.paystackKey = key;

  return { transaction, split, customer, nuban, subaccount };
}
module.exports = Paystack;
