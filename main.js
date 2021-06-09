"use strict";

let Paystack = require("./Paystack");

let initialize = function (key) {
  return new Paystack(key);
};

initialize.Paystack = Paystack;


module.exports = initialize;
