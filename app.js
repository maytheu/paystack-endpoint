require("dotenv").config();
const Paystack = require("./main")(process.env.PAYSTACK_SECRET);

console.log(Paystack);

const runResolveAccNum = (acc, bank) => {
  Paystack.identify.resolveAccNum(acc, bank).then((resp) => console.log(resp));
};

// runResolveAccNum({account_number:"0112186161", bank_code:"058"});

const runVerifyBVNMatch = (acc, bvn, bank, fn, ln, mn) => {
  Paystack.identify
    .verifyBVNMatch(acc, bank, ln)
    .then((resp) => console.log(resp));
};

// runVerifyBVNMatch({account_number:"0112186161", bvn:"22285305641", bank_code:"058",  last_name:'adetunji'});

const runResolveCardBin = (card) => {
  Paystack.identify.resolveCardBin(card).then((resp) => console.log(resp));
};

// runResolveCardBin({card:'539923'});

const runValidateCustomer = (bvn, first, last, code) => {
  Paystack.identify
    .validateCustomer(bvn, first, last, code)
    .then((resp) => console.log(resp));
};

// runValidateCustomer({bvn:22222222298, firstName:"Uchenna", lastName:"Okoro", customer_code:"CUS_1hgsnqbn9audisx"});

const runAcceptPayment = (email, amount) => {
  Paystack.payment
    .acceptPayment(email, amount)
    .then((resp) => console.log(resp));
};

// runAcceptPayment({
//   amount: "5399000",
//   email: "maytheu98@gmail.com",
//   split_code: "SPL_goedYG1vW5",
// });

const runRecurringPayment = (email, amount, authorization_code) => {
  Paystack.payment
    .recurringPayment(email, amount, authorization_code)
    .then((resp) => console.log(resp));
};

// runRecurringPayment({
//   amount: "5399000",
//   email: "maytheu98@gmail.com",
//   split_code: "SPL_goedYG1vW5",
//   authorization_code:'AUTH_gs4qrettdj'
// });

const runVerifyPayment = (reference) => {
  Paystack.payment.verifyPayment(reference).then((resp) => console.log(resp));
};

// runVerifyPayment({reference:'gj0g3cvwh0'});

const runCharge = (email, amount, bankId, accountNumber, token, phone) => {
  Paystack.payment
    .chargeBank(email, bankId, amount)
    .then((resp) => console.log(resp));
};

// runCharge({
// amount: "100000",
// email: "maytheu98@gmail.com",
// bankId: "057",
// accountNumber: "0112186161",
// // token: "12345678",
// // phone: "+2347063032847",
// });

const runChargeUssd = (
  email,
  amount,
  bankId,
  ussd,
  displayName,
  type,
  variableName,
  value
) => {
  Paystack.payment
    .chargeUSSD(email, amount, bankId, ussd, displayName, variableName, value)
    .then((resp) => console.log(resp));
};

// runChargeUssd({  amount: "100000",
// email: "maytheu98@gmail.com",
// value: "057",
// ussd: "737",
// // token: "12345678",
// // phone: "+2347063032847",
// })

const runChargeMobileMoney = (email, amount, provider, phone, currency) => {
  Paystack.payment
    .chargeMobileMoney(email, amount, provider, phone, currency)
    .then((resp) => console.log(resp));
};

// runChargeMobileMoney({
//   email: "ade@yah.com",
//   amount: 123456,
//   provider: "mtn",
//   currency:'GHS',
//   phone: "+2347063032847",
// });

const runChargeQr = (email, amount, provider, phone, currency) => {
  Paystack.payment
    .chargeQr(email, amount, provider, phone, currency)
    .then((resp) => console.log(resp));
};

// runChargeQr  ({email: "ade@yah.com",
//   amount: 123456,
//   provider: "visa",
//   currency:'NGN',
// });

const runCreatePlan = (name, interval, amount) => {
  Paystack.payment
    .createPlan(name, interval, amount)
    .then((resp) => console.log(resp));
};

// runCreatePlan({name:'Paystack module', interval:'daily', amount:10000})

const runCreateSubscription = (customer, plan) => {
  Paystack.payment
    .createSubscription(customer, plan)
    .then((resp) => console.log(resp));
};

// runCreateSubscription({
//   plan: "PLN_xg7hk0kwmtx6a0j",
//   customer: "CUS_1hgsnqbn9audisx",
// });

// console.log(paystackKey)

const runSubaccount = (
  business_name,
  bank_code,
  account_number,
  percentage_charge
) => {
  Paystack.payment
    .createSubaccount(
      business_name,
      account_number,
      percentage_charge,
      bank_code
    )
    .then((resp) => console.log(resp));
};

// runSubaccount({
//   business_name: "Paystack sub1",
//   bank_code: "058",
//   account_number: "0112186161",
//   percentage_charge: ".3",
// });

const runSplit = (
  name,
  currency,
  subaccounts,
  type,
  bearer_subaccount,
  bearer_type
) => {
  Paystack.payment
    .createSplit(
      name,
      currency,
      subaccounts,
      type,
      bearer_subaccount,
      bearer_type
    )
    .then((resp) => console.log(resp));
};

// runSplit({
//   name: "split1",
//   currency: "NGN",
//   subaccounts: [
//     { subaccount: "ACCT_2ainxoql6raurtu", share: 20 },
//     { subaccount: "ACCT_d2aj03nd2quytrs", share: 10 },
//     { subaccount: "ACCT_sefrfnbgv60cwdg", share: 15 },
//   ],
//   type: "percentage",
//   bearer_subaccount: "ACCT_2ainxoql6raurtu",
//   bearer_type: "subaccount",
// });

const runListRefund = () => {
  Paystack.payment.listRefund().then((resp) => console.log(resp));
};

// runListRefund()

const runCreateRecipient = (
  name,
  account_number,
  bank_code,
  currency,
  type
) => {
  Paystack.transfer
    .createRecipient(name, account_number, bank_code, currency, type)
    .then((resp) => console.log(resp));
};

// runCreateRecipient({
//   name: "Adetunji Mathew",
//   account_number: "0820869681",
//   bank_code: "044",
//   type: "nuban",
//   currency: "NGN",
// });

const runTransfer =( amount, recipient, source)=>{
  Paystack.transfer.transfer(amount, recipient).then(resp=>console.log(resp))
}

// runTransfer({amount:'1000000', recipient:'RCP_iyijcqb179eu9w7', })

// Paystack.transaction.total().then(resp=>console.log(resp))

// Paystack.nuban.fetchBank().then(resp=>console.log(resp))

Paystack.nuban.removeSplit('0112186161')//.then(resp=>console.log(resp))