"use strict";

const Axios = require("../axios");

// https://paystack.com/docs/payments/split-payments#initialize-a-split-payment
// https://paystack.com/docs/payments/split-payments#flat-fee
// https://paystack.com/docs/payments/split-payments#bearer-of-transaction-fee
// https://paystack.com/docs/payments/subscriptions
//https://paystack.com/docs/payments/accept-payments
// https://paystack.com/docs/payments/multi-split-payments#dynamic-splits
const acceptPayment = function (args) {
  if (!args.email || !args.amount) {
    throw new Error(" Enter required field");
  }
  return Axios({
    url: "transaction/initialize",
    method: "post",
    body: args,
  });
};

// https://paystack.com/docs/payments/multi-split-payments#charging-an-authorization
//https://paystack.com/docs/payments/recurring-charges
const recurringPayment = function (args) {
  if (!args.email || !args.amount || !args.authorization_code) {
    throw new Error(" Enter required field");
  }
  return Axios({
    url: "transaction/charge_authorization",
    method: "post",
    body: args,
  });
};

const verifyPayment = function ({ reference }) {
  if (!reference) {
    throw new Error(" Reference is required");
  }
  return Axios({
    url: `transaction/verify/${reference}`,
    method: "get",
  });
};

const createPlan = function (args) {
  if (!args.name || !args.amount || !args.interval) {
    throw new Error(" Enter required field");
  }
  return Axios({
    url: "plan",
    method: "post",
    body: args,
  });
};

const createSubscription = function (args) {
  if (!args.customer || !args.plan) {
    throw new Error(" Enter required field");
  }
  return Axios({
    url: "subscription",
    method: "post",
    body: args,
  });
};

const createSubaccount = function (args) {
  if (
    !args.business_name ||
    !args.bank_code ||
    !args.account_number ||
    !args.percentage_charge
  ) {
    throw new Error(" Enter required field");
  }
  return Axios({
    url: "subaccount",
    method: "post",
    body: args,
  });
};

const createSplit = function (args) {
  if (
    !args.name ||
    !args.currency ||
    !args.subaccounts ||
    !args.type ||
    !args.bearer_type
  ) {
    throw new Error(" Enter required field");
  }
  return Axios({
    url: "split",
    method: "post",
    body: args,
  });
};

// https://paystack.com/docs/payments/payment-channels
const charge = function (args) {
  if (!args.email || !args.amount) {
    throw new Error("Enter required field");
  }
  return Axios({
    url: "charge",
    method: "post",
    body: args,
  });
};

// https://paystack.com/docs/payments/dedicated-nuban#add-a-subaccount-when-creating-a-dedicated-nuban
// https://paystack.com/docs/payments/dedicated-nuban
// https://paystack.com/docs/payments/dedicated-nuban#add-a-split-code-when-creating-a-dedicated-nuban
const createNuban = function (args) {
  if (!args.customer || !args.preferred_bank) {
    throw new Error("Enter required field");
  }
  return Axios({
    url: "dedicated_account",
    method: "post",
    body: args,
  });
};

// https://paystack.com/docs/payments/dedicated-nuban#add-a-subaccount-to-an-existing-dedicated-nuban
// https://paystack.com/docs/payments/dedicated-nuban#add-a-split-code-to-an-existing-dedicated-nuban
const addAccountToNuban = function (args) {
  if (!args.account_number) {
    throw new Error(" Enter required field");
  }
  return Axios({
    url: "dedicated_account/split",
    method: "post",
    body: args,
  });
};

const createRefund = function (args) {
  if (!args.transaction || !args.amount) {
    throw new Error(" Enter required field");
  }
  return Axios({
    url: "refund",
    method: "post",
    body: args,
  });
};

const listRefund = function () {
  return Axios({ url: "refund", method: "get" });
};

module.exports = {
  acceptPayment,
  recurringPayment,
  verifyPayment,
  createPlan,
  createSubscription,
  createSubaccount,
  createSplit,
  charge,
  createNuban,
  addAccountToNuban,
  createRefund,
  listRefund,
};
