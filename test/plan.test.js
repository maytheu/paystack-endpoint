require("dotenv").config();
const Paystack = require("../main")(process.env.PAYSTACK_SECRET);

describe("Plan Api --> create and manage payment", () => {
  it("Create --> create plan", () => {
    Paystack.plan
      .create({ name: "test1", amount: 10000, interval: "weekly" })
      .then((resp) => {
        expect(resp.body).toEqual(
          expect.objectContaining({
            name: "test1",
            interval: "weekly",
          })
        );
      })
      .catch((err) => err);
  });

  it("List --> List available plan", () => {
    Paystack.plan
      .list()
      .then((resp) => {
        expect(resp.data).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              plan_code: expect.any(String),
              interval: expect.any(String),
            }),
          ])
        );
      })
      .catch((err) => err);
  });

  it("Fetch --> get plan details", () => {
    Paystack.plan
      .fetch("PLN_xg7hk0kwmtx6a0j")
      .then((resp) => {
        expect(resp.data).toHaveProperty("plan_code", "PLN_xg7hk0kwmtx6a0j");
      })
      .catch((err) => err);
  });

  it("Update --> Update plan", () => {
    Paystack.plan
      .update({ name: "test 2" }, "PLN_xg7hk0kwmtx6a0j")
      .then((resp) => {
        expect(resp).toHaveProperty("status", true);
      })
      .catch((err) => err);
  });
});
