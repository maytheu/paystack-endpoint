"use strict";

const transaction = require("./api/transactions"),
  split = require("./api/split"),
  customer = require("./api/customer"),
  nuban = require("./api/nuban"),
  subaccount = require("./api/subaccount"),
  plan = require("./api/plan"),
  subscription = require("./api/subscription"),
  product = require("./api/product"),
  page = require("./api/page"),
  invoice = require("./api/invoice"),
  settlement = require("./api/settlement"),
  transferRecipient = require("./api/transferRecipient"),
  transfer = require("./api/transfer"),
  balance = require("./api/balance"),
  bulk = require("./api/bulk"),
  control = require("./api/control"),
  charge = require("./api/charge"),
  dispute = require("./api/disputes"),
  refund = require("./api/refund"),
  verify = require("./api/verify"),
  misc = require("./api/misc");

function Paystack(key) {
  if (!key) {
    throw new Error("key is required");
  }

  global.paystackKey = key;

  return {
    transaction,
    split,
    customer,
    nuban,
    subaccount,
    plan,
    subscription,
    product,
    page,
    invoice,
    settlement,
    transferRecipient,
    transfer,
    balance,
    bulk,
    control,
    charge,
    dispute,
    refund,
    verify,
    misc,
  };
}
module.exports = Paystack;
