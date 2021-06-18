require("dotenv").config();
const Paystack = require("../main")(process.env.PAYSTACK_SECRET);

describe("Subaccount Api --> create and manage subaccount", () => {
  it("Create --> create a new subaccount", () => {
    Paystack.subaccount
      .create({
        business_name: "Sunshine Studios",
        settlement_bank: "044",
        account_number: "0193274682",
        percentage_charge: 18.2,
      })
      .then((resp) => {
        expect(resp.data).toHaveProperty("percentage_charge", 18.2);
      });
  });

  it("List --> list available subaccount", () => {
    Paystack.subaccount.list().then((resp) => {
      expect(resp.data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            subaccount_code: expect.any(String),
            percentage_charge: expect.any(Number),
          }),
        ])
      );
    });
  });

  it("Fetch --> get details of subaccount", () => {
    Paystack.subaccount.fetch("ACCT_2ainxoql6raurtu").then((resp) => {
      expect(resp.data).toHaveProperty("subaccount_code");
    });
  });

  it("Update --> update subaccount information", () => {
    Paystack.subaccount
      .update(
        { primary_contact_email: "dafe@aba.com", percentage_charge: 18.9 },
        "ACCT_2ainxoql6raurtu"
      )
      .then((resp) => {
        expect(resp.data).toHaveProperty("subaccount_code");
      });
  });
});
