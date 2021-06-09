const axios = require("axios"),
  root = "https://api.paystack.co/";

const Axios = (args) => {
  if (args.method === "get") {
    return axios
      .get(`${root}${args.url}`, {
        headers: {
          Authorization: `Bearer ${paystackKey}`,
        },
      })
      .then((resp) => resp.data)
      .catch((err) => err.response.data);
  }
  if (args.method === "post") {
    return axios
      .post(`${root}${args.url}`,args.body, {
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
