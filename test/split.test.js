require("dotenv").config();
const Paystack = require("../main")(process.env.PAYSTACK_SECRET);

describe("Transaction Splits --> split settlement transaction", () => {
  it("Create Split --> create split payment", () => {
    Paystack.split
      .create({
        name: "Test split1",
        type: "percentage",
        currency: "NGN",
        subaccounts: [
          { subaccount: "ACCT_2ainxoql6raurtu", share: 20 },
          { subaccount: "ACCT_d2aj03nd2quytrs", share: 10 },
          { subaccount: "ACCT_sefrfnbgv60cwdg", share: 15 },
        ],
        bearer_subaccount: "ACCT_2ainxoql6raurtu",
        bearer_type: "subaccount",
      })
      .then((resp) => {
        expect(resp.data).toEqual(
          expect.objectContaining({
            type: "percentage",
            currency: "NGN",
            split_code: expect.any(String),
            active: expect.any(Boolean),
            bearer_type: "subaccount",
          })
        );
      });
  });

  it("List split --> list transaction split", () => {
    Paystack.split.list({ active: true }).then((resp) => {
      expect(resp.data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            split_code: expect.any(String),
            bearer_type: "subaccount",
          }),
        ])
      );
    });
  });

  it("Fetch split --> Get split details", () => {
    Paystack.split.fetch("SPL_jEsF8h3cXf").then((resp) => {
      expect(resp.data).toHaveProperty("split_code", "SPL_jEsF8h3cXf");
    });
  });

  it("Update split --> update transaction split", () => {
    Paystack.split
      .update({ name: "updated test" }, "SPL_jEsF8h3cXf")
      .then((resp) => {
        expect(resp.data).toHaveProperty("name", "updated test    ");
      });
  });

  it("Add/Update split --> add or update the share of subaccount", () => {
    Paystack.split
      .addSubaccount("ACCT_2ainxoql6raurtu", 12, "SPL_jEsF8h3cXf")
      .then((resp) => {
        expect(resp.status).toEqual("true");
        expect(resp.data).toHaveProperty("split_code", "SPL_jEsF8h3cXf");
      });
  });

  it("Remove subaccount --> remove subaccount from transaction split", () => {
    Paystack.split
      .removeSubaccount("ACCT_sefrfnbgv60cwdg", "SPL_jEsF8h3cXf")
      .then((resp) => {
        expect(resp.status).toEqual("true");
        expect(resp.message).toEqual("Subaccount removed");
      });
  });
});
