require("dotenv").config();
const Paystack = require("../main")(process.env.PAYSTACK_SECRET);

describe("Refund --> Create and manage refund transaction", () => {
  it("create --> Create refund", () => {
    // Paystack.refund.create({ transaction: 1641 }).then((resp) => {
    //   expect(resp.data).toHaveProperty("transaction.metadata.custom_fields");
    //   expect(resp.data).toHaveProperty("expected_at");
    //   expect(resp.data).toHaveProperty("transaction.id", 1641);
    // });
  });

  it("List refunds --> list available refunds", () => {
    // Paystack.refund.list({ currency: "NGN" }).then((resp) => {
    //   expect(resp.data).toEqual(
    //     expect.arrayContaining(
    //       expect.objectContaining({
    //         domain: "test",
    //         amount: expect.any(Number),
    //       })
    //     )
    //   );
    // });
  });

  it("Fetch refund --> get details of refunds", () => {
    // Paystack.refund.fetch(1641).then((resp) => {
    //   expect(resp.data.transaction).toBe(1641);
    // });
  });
});
