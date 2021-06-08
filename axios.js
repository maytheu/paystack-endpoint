const axios = require("axios"),
  root = "https://api.paystack.co/";

const Axios = (args) => {
  if (args.method === "get") {
    return axios
      .get(`${root}${args.url}`, {
        headers: {
          Authorization: `Bearer ${args.key}`,
        },
      })
      .then((resp) => resp.data)
      .catch((err) => err.response.data);
  }
  if (args.method === "post") {
    return axios
      .post(`${root}${args.url}`,args.body, {
        headers: {
          Authorization: `Bearer ${args.key}`,
          "Content-Type": "application/json",
        },
      })
      .then((resp) => resp.data)
      .catch((err) => err.response.data);
  }
};

module.exports = Axios;
