require("dotenv").config();
const Paystack = require("../main")(process.env.PAYSTACK_SECRET);

describe("Payment page Api --> collect payment for product", () => {
  it("Create --> Create payment page for product", () => {
    Paystack.page
      .create({
        name: "Buttercup Brunch",
        amount: 500000,
        description: "Gather your friends for the ritual that is brunch",
      })
      .then((resp) => {
        expect(resp.data).toHaveProperty("name", "Buttercup Brunch");
      });
  });

  it("List --> list availabe payment pages", () => {
    Paystack.page.list().then((resp) => {
      expect(resp.data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            name: expect.any(String),
          }),
        ])
      );
    });
  });

  it("Fetch --> get payment detail page", () => {
    Paystack.page.fetch(723065).then((resp) => {
      expect(resp.data).toHaveProperty("slug");
    });
  });

  it("Update --> update payment oage detail", () => {
    Paystack.page.update({ amount: 50000000 }, 723065).then((resp) => {
      expect(resp.data).toHaveProperty("slug");
    });
  });

  it("Check --> check page availability", () => {
    Paystack.page.check("bpq433vb4w").then((resp) => {
      expect(resp.status).toBe("true");
    });
  });

  it("app Product --> Add product to payment page", () => {
    Paystack.page.addProduct([143617, 12344], "723065").then((resp) => {
      expect(resp.data).toHaveProperty("products");
    });
  });
});
