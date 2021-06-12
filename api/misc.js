"use strict";

const Axios = require("../axios");
const { query } = require("../query");

const list = function (args) {
  let param;
  if (args) {
    param = query(args);
  }
  return Axios({ url: args ? `bank?${param}` : 'bank', method: "get" });
};

const listProviders = function () {
  return Axios({ url: `bank?pay_with_bank_transfer=true`, method: "get" });
};

const listCountries = function () {
  return Axios({ url: "country", method: "get" });
};

const listStates = function (country) {
  if (!country) {
    throw new Error("Country code is required");
  }
  return Axios({
    url: `address_verification/states?country=${country}`,
    method: "get",
  });
};

module.exports = { list, listProviders, listCountries, listStates };
