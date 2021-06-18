require("dotenv").config();
const Paystack = require("../main")(process.env.PAYSTACK_SECRET);

describe("Control Api --> Manage settings", () => {
  it("Fetch --> Fetch payment timeout session", () => {
    Paystack.control.fetch().then((resp) => {
      expect(resp).toHaveProperty("status");
    });
  });

  it("Update --> update payment session", () => {
    Paystack.control.update(31).then((resp) => {
      expect(resp.data).toHaveProperty("payment_session_timeout", 31);
    });
  });
});
