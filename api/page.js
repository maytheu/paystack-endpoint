"use strict";

const Axios = require("../axios"),
  root = "page";
const { query } = require("../query");

const create = function (args) {
  if (!args.name) {
    throw new Error("Name is required");
  }
  return Axios({ url: root, body: args, method: "post" });
};

const list = function (args) {
  let param;
  if (args) {
    param = query(args);
  }
  return Axios({ url: args ? `${root}?${param}` : root, method: "get" });
};

const fetch = function (id) {
  if (!id) {
    throw new Error("Page id or slug  is required");
  }
  return Axios({ url: `${root}/${id}`, method: "get" });
};

const update = function (args, id) {
  if (!id) {
    throw new Error("Page id or slug is required");
  }
  return Axios({
    url: `${root}/${id}`,
    method: "put",
    body: args,
  });
};

const check = function (url) {
  if (!url) {
    throw new Error("Slug url is required");
  }
  return Axios({
    url: `${root}/check_slug_availability/${url}`,
    method: "get",
  });
};

const addProduct = function (product, id) {
  if (!id || !product) {
    throw new Error("Enter required field");
  }
  if (typeof product === "object") {
    return Axios({
      url: `${root}/${id}/product`,
      method: "post",
      body: product,
    });
  }
  throw new Error("Product must be an array");
};

module.exports = { create, list, fetch, update, check, addProduct };
