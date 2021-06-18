require("dotenv").config();
const Paystack = require("../main")(process.env.PAYSTACK_SECRET);

describe("Subscriptions Api --> create and manage recurring payment", () => {
  it("create --> create a new subcription", () => {
    Paystack.subscription
      .create({
        customer: "CUS_1hgsnqbn9audisx",
        plan: "PLN_iy5dicvhhi4taaz",
      })
      .then((resp) => {
        expect(resp.data).toEqual(
          expect.objectContaining({
            customer: expect.any(Number),
            subscription_code: expect.any(String),
          })
        );
      });
  });

  it("List --> list avilable subscription", () => {
    Paystack.subscription.list().then((resp) => {
      expect(resp.data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            subscription_code: expect.any(String),
          }),
        ])
      );
    });
  });

  it("Fetch --> get subscription details", () => {
    Paystack.subscription.fetch("SUB_tsyqsemrxy1mepn").then((resp) => {
      expect(resp).toHaveProperty("status", "true");
    });
  });

  it("Enable subsription --> Enable a subscription", () => {
    Paystack.subscription
      .enable("SUB_tsyqsemrxy1mepn", "s4sqw0ijqj61wg0")
      .then((resp) => {
        expect(resp).toHaveProperty("status", "true");
      });
  });

  it("Disable subsription --> disable subsscription", () => {
    Paystack.subscription
      .enable("SUB_tsyqsemrxy1mepn", "s4sqw0ijqj61wg0")
      .then((resp) => {
        expect(resp).toHaveProperty("status", "true");
      });
  });
});
