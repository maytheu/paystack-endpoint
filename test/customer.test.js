require("dotenv").config();
const Paystack = require("../main")(process.env.PAYSTACK_SECRET);

describe("Customers --> create and manage customers", () => {
  let customer;
  it("Create customer --> create new customer", () => {
    Paystack.customer
      .create({
        email: "maytheu98@gmail.com",
        first_name: "Mathew",
        last_name: "Adetunji",
        phone: "+2347063032847",
      })
      .then((resp) => {
        customer = resp.data.customer_code;
        expect(resp.data).toHaveProperty("email", "maytheu98@gmail.com");
        expect(resp.data).toHaveProperty("phone", "+2347063032847");
      })
      .catch((err) => err);
  });

  it("Fetch --> get customer details", () => {
    Paystack.customer
      .fetch("CUS_1hgsnqbn9audisx")
      .then((resp) => {
        expect(resp.data).objectContaining({
          integration: expect.any(Number),
          email: "maytheu98@gmail.com",
          identified: true,
        });
      })
      .catch((err) => err);
  });

  it("List --> list all your customer", () => {
    Paystack.customer
      .list()
      .then((resp) => {
        expect(resp.status).toEqual("true");
      })
      .catch((err) => err);
  });

  it("update --> update customer details", () => {
    Paystack.customer
      .update({ first_name: "Adeola" }, "CUS_1hgsnqbn9audisx")
      .then((resp) => {
        expect(resp.data).toHaveProperty("first_name", "Adeola");
        expect(resp.data).toHaveProperty("customer_code", customer);
      })
      .catch((err) => err);
  });

  it("Validate --> validate customer identity", () => {
    Paystack.customer
      .validate(
        "NG",
        "22285305641",
        "CUS_1hgsnqbn9audisx",
        "Adeola",
        "Adetunji"
      )
      .then((resp) => {
        expect(resp.status).toEqual("true");
      })
      .catch((err) => err);
  });

  it("Whitelist/Blacklist --> Whitelist or blacklist a customer", () => {
    Paystack.customer
      .blacklist({ customer: "CUS_1hgsnqbn9audisx", risk_action: "deny" })
      .then((resp) => {
        expect(resp.data).toHaveProperty("risk_action", "deny");
      })
      .catch((err) => err);
  });

  it("Deadtivate auth --> Deactivate an authorization", () => {
    Paystack.customer
      .deactivateAuth("AUTH_6033manalk")
      .then((resp) => {
        expect(resp.message).toEqual("Authorization has been deactivated");
      })
      .catch((err) => err);
  });
});
