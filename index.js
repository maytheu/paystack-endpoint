const axios = require("axios");
require("dotenv").config();

const resolveAccNum = (accountNumber, bankId) => {
  return axios
    .get(
      `https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${bankId}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET}`,
        },
      }
    )
    .then((resp) => resp.data)
    .catch((err) => err.response.data);
};

const verifyBVNMatch = (bvn, accountNumber, bankId) => {
  return axios
    .post(
      "https://api.paystack.co/bvn/match",
      { bvn, account_number: accountNumber, bank_code: bankId },
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((resp) => resp.data)
    .catch((err) => err.response.data);
};

const resolveCardBin = (card) => {
  return axios
    .get(`https://api.paystack.co/decision/bin/${card}`, {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET}`,
      },
    })
    .then((resp) => resp.data)
    .catch((err) => err.response.data);
};

const validateCustomer = (bvn, firstName, lastName, customer_code) => {
  return axios
    .post(
      `https://api.paystack.co/customer/${customer_code}/identification`,
      {
        country: "NG",
        type: "bvn",
        value: bvn,
        first_name: firstName,
        last_name: lastName,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((resp) => resp.data)
    .catch((err) => err.response.data);
};

module.exports = {
  resolveAccNum,
  verifyBVNMatch,
  resolveCardBin,
  validateCustomer,
};
