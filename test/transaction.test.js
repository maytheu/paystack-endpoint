require("dotenv").config();
const Paystack = require("../main")(process.env.PAYSTACK_SECRET);

describe("Transaction Api --> Manage payment", () => {
  it("Initialize transaction --> initiate transaction", () => {
    Paystack.transaction
      .initialize({
        amount: 500000,
        email: "maytheuhaydey@gmail.com",
      })
      .then((resp) => {
        expect(resp.status).toBe(true);
        expect(resp.data).toHaveProperty("reference");
      });
  });

  it("Verify --> Confirm transaction status", () => {
    Paystack.transaction.verify("123wsyd3e").then((resp) => {
      expect(resp.data).toHaveProperty("log");
      expect(resp.data).toHaveProperty("authorization");
    });
  });

  it("List transaction --> list transactions on your integration", () => {
    Paystack.transaction.list({ status: "success" }).then((resp) => {
      expect(resp.data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            amount: expect.any(Number),
          }),
        ])
      );
    });
  });

  it("Fetch Transaction --> get a detailed trasancetion", () => {
    Paystack.transaction.fetch(166801077).then((resp) => {
      expect(resp).toHaveProperty("status", true);
      expect(resp).toHaveProperty("data.amount");
      expect(resp.data).toHaveProperty("metadata");
    });
  });

  it("Charge Auth --> charge reusable autorization", () => {
    Paystack.transaction
      .chargeAuth({
        authorization_code: "AUTH_6033manalk",
        amount: 5000,
        email: "maytheu98@gmail.com",
      })
      .then((resp) => {
        expect(resp.data).toHaveProperty("authorization");
        expect(resp.data).toEqual(
          expect.objectContaining({
            fees: expect.any(Number),
          })
        );
      });
  });

  it("Check auth --< check card sufficeincy", () => {
    Paystack.transaction
      .checkAuth({
        authorization_code: "AUTH_6033manalk",
        amount: 5000,
        email: "maytheu98@gmail.com",
      })
      .then((resp) => {
        expect(resp.data).toHaveProperty("currency", "NGN");
        expect(resp.status).toEqual(true);
      });
  });

  it("View trasaction --> view timeline", () => {
    Paystack.transaction.view(166801077).then((resp) => {
      expect(resp.data).toEqual(
        expect.objectContaining({
          time_spent: expect.any(Number),
          mobile: expect.any(Boolean),
          attempts: expect.any(Number),
        })
      );
    });
  });

  it("Total transaction --> total amount received", () => {
    Paystack.transaction.total().then((resp) => {
      expect(resp.data).objectContaining({
        total_transactions: expect.any(Number),
        total_volume: expect.any(Number),
        unique_customers: expect.any(Number),
      });
    });
  });

  it("Export transaction --> List transaction", () => {
    Paystack.transaction.exportTrans().then((resp) => {
      expect(resp.status).toEqual("true");
      expect(resp.data).toHaveProperty("path");
    });
  });

  it("Partial Debit --> Retrieve transaction from customer", () => {
    Paystack.transaction
      .partialDebit({
        authorization_code: "AUTH_6033manalk",
        amount: 5000,
        email: "maytheu98@gmail.com",
        currency: "NGN",
      })
      .then((resp) => {
        expect(resp.data).toEqual(
          objectContaining({
            amount: expect.any(Number),
            status: expect.any(String),
          })
        );
      });
  });
});
