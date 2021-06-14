require("dotenv").config();
const Paystack = require("../main")(process.env.PAYSTACK_SECRET);

describe("Transfers Control Api --> manage settings", () => {
  it("Check balance --> fetch available balances", () => {
    Paystack.balance
      .check()
      .then((resp) => {
        expect(resp.data).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              currency: "NGN",
              balance: expect.any(Number),
            }),
          ])
        );
      })
      .catch((err) => err);
  });

  it("Fetch balance --> Fetch all pay-ins and pay-outs", () => {
    Paystack.balance
      .fetch()
      .then((resp) => {
        expect(resp.data).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              balance: expect.any(Number),
            }),
          ])
        );
      })
      .catch((err) => err);
  });
});
