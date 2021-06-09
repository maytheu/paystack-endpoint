"use strict";
require('dotenv').config()

const identify = require("./api/identify");
const payment = require("./api/payment");

function Paystack(key) {
  if (!key ) {
    throw new Error("key is required");
  }

  global.paystackKey = key;

  return { identify, payment };
}
module.exports = Paystack;
