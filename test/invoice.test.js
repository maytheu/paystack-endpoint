require("dotenv").config();
const Paystack = require("../main")(process.env.PAYSTACK_SECRET);

describe("Invoice Api --> manage payment request", () => {
  it("create --> create an invoice for payment", () => {
    Paystack.invoice
      .create({
        customer: "CUS_1hgsnq344dvvvg",
        amount: 100000,
        due_date: "2021 - 08 - 08",
      })
      .then((resp) => {
        expect(resp.data).toHaveProperty("has_invoice", true);
      });
  });

  it("List --> list available invoice", () => {
    Paystack.invoice.list({ customer: "CUS_1hgsnqbxxwww" }).then((resp) => {
      expect(resp.data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            currency: "NGN",
            due_date: expect.any(String),
          }),
        ])
      );
    });
  });

  it("View --> get invoice details", () => {
    Paystack.invoice.view("PRQ_1weqqsn2wwzgft8").then((resp) => {
      expect(resp.data).toHaveProperty("request_code", "PRQ_1weqqsn2wwzgft8");
    });
  });

  it("Verify --> verify invoice details", () => {
    Paystack.invoice.verify("PRQ_1weqqsn2wwzgft8").then((resp) => {
      expect(resp.data).toHaveProperty("request_code", "PRQ_1weqqsn2wwzgft8");
    });
  });

  it("Notification --> send invoice notification", () => {
    Paystack.invoice.notification("PRQ_1weqqsn2wwzgft8").then((resp) => {
      expect(resp.message).toEqual("Notification sent");
    });
  });

  it("Total --> get total invoice", () => {
    Paystack.invoice.total().then((resp) => {
      expect(resp.data).toHaveProperty("total");
    });
  });

  it("Finalize --> finalize invoice", () => {
    Paystack.invoice.finalize("PRQ_rtjkfk1tpmvqo40").then((resp) => {
      expect(resp.data).toHaveProperty("request_code", "PRQ_rtjkfk1tpmvqo40");
    });
  });

  it("Update --> update an invoice", () => {
    Paystack.invoice
      .update({ description: "Update test" }, 3136496)
      .then((resp) => {
        expect(resp.message).toEqual("Payment request updated");
      });
  });

  it("archive --> archive an invoice", () => {
    Paystack.invoice.archive(3136496).then((resp) => {
      expect(resp.message).toEqual("Payment request has been archived");
    });
  });
});
