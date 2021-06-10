const query = (obj) => {2
  let param = Object.keys(obj)
    .map(function (key) {
      return key + "=" + obj[key];
    })
    .join("&");
  return param;
};

module.exports = { query };
