"use strict";

const Axios = require("../axios"),
  root = "charge";

const create = function (args) {
  if (!args.email || !args.amount) {
    throw new Error("Enter required field");
  }
  return Axios({ url: root, body: args, method: "post" });
};

const submitPin = function (pin, reference) {
  if (!reference || !pin) {
    throw new Error("Enter required field");
  }
  return Axios({
    url: `${root}/submit_pin`,
    body: { pin, reference },
    method: "post",
  });
};

const submitOtp = function (otp, reference) {
  if (!reference || !otp) {
    throw new Error("Enter required field");
  }
  return Axios({
    url: `${root}/submit_otp`,
    body: { otp, reference },
    method: "post",
  });
};

const submitPhone = function (phone, reference) {
  if (!reference || !phone) {
    throw new Error("Enter required field");
  }
  return Axios({
    url: `${root}/submit_phone`,
    body: { phone, reference },
    method: "post",
  });
};

const submitBirthday = function (birthday, reference) {
  if (!reference || !birthday) {
    throw new Error("Enter required field");
  }
  return Axios({
    url: `${root}/submit_birthday`,
    body: { birthday, reference },
    method: "post",
  });
};

const submitAddress = function (address, city, state, zipcode, reference) {
  if (!reference || !address || !zipcode || !city || !state) {
    throw new Error("Enter required field");
  }
  return Axios({
    url: `${root}/submit_address`,
    body: { address, state, city, zipcode, reference },
    method: "post",
  });
};

const check = function (reference) {
  if (!reference) {
    throw new Error("Reference is required");
  }
  return Axios({ url: `${root}/${reference}`, method: "get" });
};

module.exports = {
  create,
  submitPhone,
  submitPin,
  submitOtp,
  submitBirthday,
  submitAddress,
  check,
};
