"use strict";

const Axios = require("./axios");

function Paystack(key, options) {
  console.log(key);
  options = options || {};
  key = key || process.env.key;
  let paystackKey = options.paystackKey || key;

  if (!key) {
    throw new Error("key is required");
  }
  return {
    identify: {
      resolveAccNum: function (accountNumber, bankId) {
        return Axios({
          url: `bank/resolve?account_number=${accountNumber}&bank_code=${bankId}`,
          method: "get",
          key,
        });
      },

      resolveCardBin: function (card) {
        return Axios({ url: `decision/bin/${card}`, method: "get", key });
      },

      validateCustomer: function (bvn, firstName, lastName, customer_code) {
        return Axios({
          url: `customer/${customer_code}/identification`,
          method: "post",
          body: {
            country: "NG",
            type: "bvn",
            value: bvn,
            first_name: firstName,
            last_name: lastName,
          },
          key,
        });
      },

      verifyBVNMatch: function (bvn, accountNumber, bankId) {
        return Axios({
          url: "bvn/match",
          method: "post",
          body: { bvn, account_number: accountNumber, bank_code: bankId },
          key,
        });
      },
    },
  };
}
module.exports = Paystack;
