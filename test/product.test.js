require("dotenv").config();
const Paystack = require("../main")(process.env.PAYSTACK_SECRET);

describe("Product Api --> create and manage inventory", () => {
  it("Create --> create new product", () => {
    Paystack.product
      .create({
        description: "Product Six Description",
        name: "Product Six",
        price: 500000,
        currency: "NGN",
        limited: false,
        quantity: 100,
      })
      .then((resp) => {
        expect(resp.data).toEqual(
          expect.objectContaining({
            name: "Product Six",
            currency: "NGN",
            limited: false,
          })
        );
      })
      .catch((err) => err);
  });

  it("List --> list available product", () => {
    Paystack.product
      .list()
      .then((resp) => {
        expect(resp.data).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              name: expect.any(String),
              currency: "NGN",
              price: expect.any(Number),
            }),
          ])
        );
      })
      .catch((err) => err);
  });

  it("Fetch --> get product details", () => {
    Paystack.product
      .fetch("PROD_ohc0xq1ajpt2271")
      .then((resp) => {
        expect(resp.data).toHaveProperty("product_code");
      })
      .catch((err) => err);
  });

  it("Update --> update a product", () => {
    Paystack.product
      .update({ name: "Test update" }, "PROD_ohc0xq1ajpt2271")
      .then((resp) => {
        expect(resp.data).toHaveProperty("name", "Test update");
      })
      .catch((err) => err);
  });
});
