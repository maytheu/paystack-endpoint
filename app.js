require('dotenv').config()
const Paystack = require("./main")(process.env.PAYSTACK_SECRET);

console.log(Paystack);

const runResolveAccNum = (acc, bank) => {
  Paystack.identify.resolveAccNum(acc, bank).then((resp) => console.log(resp));
};

// runResolveAccNum("0112186161", "058");

const runVerifyBVNMatch = (acc, bvn, bank) => {
  Paystack.identify
    .verifyBVNMatch(bvn, acc, bank)
    .then((resp) => console.log(resp));
};

// runVerifyBVNMatch("0112186161", "22285305641", "058");

const runResolveCardBin = (card) => {
  Paystack.identify.resolveCardBin(card).then((resp) => console.log(resp));
};

// runResolveCardBin(539923);

const runValidateCustomer = (bvn, first, last, code) => {
  Paystack.identify
    .validateCustomer(bvn, first, last, code)
    .then((resp) => console.log(resp));
};

runValidateCustomer(22222222298, "Uchenna", "Okoro", "CUS_1hgsnqbn9audisx");
