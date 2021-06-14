# Paystack-endpoint

This node module is a reference to the [paystack api docs](https://paystack.com/docs/api/#)

## Installation

```
npm install paystack-endpoint
```

## Usage

Create a [free paystack account](https://dashboard.paystack.co/#/signup) to get paystack key. Do not commit your keys.

No extra configuration, just require the module

```
const Paystack = require(paystack-endpoint)(process.env.secret)
```

Most resources in this modules accept object(both optional and required) as parameter unless stated other wise.

```
Paystack.verify
  .verifyBvn({
    bvn: 0000011111,
    account_number: 0000011111,
    bank_code: 058,
    last_name: "Abiola",
  })
  .then((resp) => {
    console.log(resp);
  });
```

```
Paystack.transaction.list().then((resp) => {
  console.log(resp);
});
```

## Resources

Paystack

- transaction
  - initialize
  - fetch - accept id
  - verify - accept reference
  - list
  - chargeAuth
  - checkAuth
  - view - acept reference
  - total
  - exportTrans
  - partialDebit
- customer
  - create
  - fetch - accept email
  - list
  - update - accept object and customer_code
  - validate - accept country, bvn, customer_code, first_name, last_name
  - blacklist
  - deactivateAuth - authorization_code
- plan
  - create
  - list
  - fetch - accept id
  - update

## Run test

```
npm test
```

Tested with [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)
