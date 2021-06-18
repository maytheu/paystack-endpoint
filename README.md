# Paystack-endpoint

[![npm](https://img.shields.io/badge/npm-v0.1.0-blue)](https://www.npmjs.com/package/paystack-endpoint)


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

This example accept optional object params to transactiion.list() 
```
Paystack.transaction.list({perPage:2}).then((resp) => {
  console.log(resp);
});
```

This example accept both object and customer_code as params
```
Paystack.customer
  .update({ last_name: "Adetunji" }, "CUS_XXXXXX")
  .then((resp) => {
    console.log(resp);
  });
``` 

## Resources

Paystack

- [transaction](https://paystack.com/docs/api/#transaction)
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
- [customer](https://paystack.com/docs/api/#customer)
  - create
  - fetch - accept email
  - list
  - update - accept object and customer_code
  - validate - accept country, bvn, customer_code, first_name, last_name
  - blacklist
  - deactivateAuth - authorization_code
- [plan](https://paystack.com/docs/api/#plan)
  - create
  - list
  - fetch - accept id
  - update - accept object and id
- [product](https://paystack.com/docs/api/#product)
  - create
  - list
  - fetch - accept id
  - update - accept object and id
- [invoice](https://paystack.com/docs/api/#invoice)
  - create
  - list
  - view - accept id
  - verify - accept code
  - notification - accept code
  - total
  - finalize - accept id
  - update - accept object and id
  - archive - accept id
- [transfer](https://paystack.com/docs/api/#transfer)
  - initiate
  - finalize - accept transfer_code and otp
  - initiateBulk 
  - list
  - fetch - accept id
  - verify - accept reference
  - resendOtp - accept transfer_code and reason
  - disableOtp
  - disableOtpFinally - accept otp
  - enableOtp
- [verify](https://paystack.com/docs/api/#verification)
  - verifyBvn
  - resolveAccount - accept account_number and bank_code
  - resolveCardBin -accept card
- [charge](https://paystack.com/docs/api/#charge)
  - create
  - submitPin - accept pin and reference
  - submitOtp - accept otp and reference
  - submitPhone - accept phone and reference
  - submitBirthday - accept birthday and reference
  - submitAddress - accept address, city, state, zipcode and reference
  - check - accep reference
- [subsription](https://paystack.com/docs/api/#subscription)
  - create
  - list
  - fetch - accept id
  - enable - accept code and token
  - disable - accept code and token
- [split](https://paystack.com/docs/api/#split)
  - create
  - list
  - fetch - accept id
  - update - accept object and id
  - addSubaccount - accept subaccount, share and id
  - removeSubaccount - accept subaccount and id
- [subaccount](https://paystack.com/docs/api/#subaccount)
  - create
  - list
  - fetch - accept id
  - update - accept object and id
- [page](https://paystack.com/docs/api/#page)
  - create
  - list
  - fetch - accept id
  - update - accept object and id
  - check - accept url
  - addProduct - accept product and id
- [bulk](https://paystack.com/docs/api/#bulk-charge)
  - initiate - accept array
  - list
  - fetch - accept id
  - fetchCharges - accept object and id
  - pause - accept code
  - resume - accept code
- [control](https://paystack.com/docs/api/#control-panel)
  - fetch
  - update -accept timeout
- [dispute](https://paystack.com/docs/api/#dispute)
  - list
  - fetch - accept id
  - listTransaction - accept id
  - update - accept object and id
  - addEvidence - accept object and id
  - upload - accept id and file.ext
  - resolve - accept object and id
  - exportDispute 
- [balance](https://paystack.com/docs/api/#transfer-control)
  - check
  - fetch
- [nuban](https://paystack.com/docs/api/#dedicated-nuban)
  - create
  - list
  - fetch - accept id
  - deactivate - accept id
  - split
  - removeSplit - accept account_number
  - fetchBank
- [refund](https://paystack.com/docs/api/#refund) 
  - create
  - list
  - fetch - accept reference
- [transferRecipient](https://paystack.com/docs/api/#transfer-recipient)
  - create
  - bulkCreate - accept batch
  - list
  - fetch - accept id
  - update - accept object and id
  - deleteRecipient - accept id
- [misc](https://paystack.com/docs/api/#miscellaneous)
  - list
  - listProviders
  - listCountries
  - listStates - accept country code
 
 
## Run test

```
npm test
```
Add PAYSTACK_SECRET to .env file,  pass the required params to the function for all test to pass

[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)