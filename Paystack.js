"use strict";

const identify = require("./api/identify");
const payment = require("./api/payment");
const transfer=require('./api/transfer')

function Paystack(key) {
  if (!key ) {
    throw new Error("key is required");
  }

  global.paystackKey = key;

  return { identify, payment, transfer };
}
module.exports = Paystack;
