require("dotenv").config();
const Paystack = require("../main")(process.env.PAYSTACK_SECRET);

describe("Miscellaneous Api", () => {
  it("List Bank --> get list of bank", () => {
    return Paystack.misc.list({ perPage: 10 }).then((response) => {
      expect(response.data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            name: expect.any(String),
            code: expect.any(String),
            pay_with_bank: expect.any(Boolean),
            type: "nuban",
            currency: "NGN",
          }),
        ])
      );
    });
  });

  it("List Provider --> for dedicated nuban", () => {
    return Paystack.misc.listProviders().then((response) => {
      expect(response.data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            name: expect.any(String),
            code: expect.any(String),
            pay_with_bank: expect.any(Boolean),
            type: "nuban",
            currency: "NGN",
          }),
        ])
      );
    });
  });

  it("List country --> country supported by paystack", () => {
    return Paystack.misc.listCountries().then((response) => {
      expect(response.data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            name: expect.any(String),
            iso_code: expect.any(String),
            default_currency_code: "NGN",
          }),
        ])
      );
    });
  });

  it("List states --> state for country for verification", () => {
    return Paystack.misc.listStates("CA").then((resp) => {
      expect(resp.data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            name: expect.any(String),
            slug: expect.any(String),
            abbreviation: "AB",
          }),
        ])
      );
    });
  });
});
