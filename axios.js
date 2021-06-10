"use strict";

const axios = require("axios"),
  root = "https://api.paystack.co/";

const Axios = (args) => {
  let method = args.method;
  if (method === "get" || method === "delete") {
    return axios({
      method,
      url: `${root}${args.url}`,
      headers: { Authorization: `Bearer ${paystackKey}` },
    })
      .then((resp) => resp.data)
      .catch((err) => err.response.data);
  }
  if (method === "post" || method === "put") {
    let data = args.body;
    return axios({
      method,
      url: `${root}${args.url}`,
      data,
      headers: {
        Authorization: `Bearer ${paystackKey}`,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.data)
      .catch((err) => err.response.data);
  }
};

module.exports = Axios;
