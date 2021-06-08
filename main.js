"use strict";

let Paystack = require("./Paystack");

let initialize = function (key, options) {
  return new Paystack(key, options);
};


initialize.Paystack = Paystack;


module.exports = initialize;
