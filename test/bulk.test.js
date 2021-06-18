require("dotenv").config();
const Paystack = require("../main")(process.env.PAYSTACK_SECRET);

describe("Bulk Charges Api --> create and manage multiple payment", () => {
  it("Initiate --> initiate bulk charges", () => {
    Paystack.bulk
      .initiate([
        { authorization: "AUTH_n95vpedf", amount: 2500 },
        { authorization: "AUTH_ljdt4e4j", amount: 1500 },
      ])
      .then((resp) => {
        expect(resp).toHaveProperty("status");
      });
  });

  it("List --> list all bulk charges", () => {
    Paystack.bulk.list().then((resp) => {
      expect(resp).toHaveProperty("status", "true");
    });
  });

  it("Fetch --> retrieve specific charge", () => {
    Paystack.bulk.fetch("BCH_1nV4L1D7cayggh").then((resp) => {
      expect(resp).toHaveProperty("status");
    });
  });

  it("Fetch charge --> list the charge associated batch", () => {
    Paystack.bulk
      .fetchCharges({ status: "failed" }, "fetchCharges")
      .then((resp) => {
        expect(resp).toHaveProperty("status");
      });
  });

  it("Pause --> pause a processing batch", () => {
    Paystack.bulk.pause("BCH_1nV4L1D7cayggh").then((resp) => {
      expect(resp).toHaveProperty("status");
    });
  });

  it("Resume --> resume a processing batch", () => {
    Paystack.bulk.resume("BCH_1nV4L1D7cayggh").then((resp) => {
      expect(resp).toHaveProperty("status");
    });
  });
});
