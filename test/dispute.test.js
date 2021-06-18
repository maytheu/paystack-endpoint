require("dotenv").config();
const Paystack = require("../main")(process.env.PAYSTACK_SECRET);

describe("Dispute Api --> manage transaction disputes", () => {
  it("List --> list disputes", () => {
    Paystack.dispute.list().then((resp) => {
      expect(resp).toHaveProperty("status");
    });
  });

  it("Fetch --> get dispute details", () => {
    Paystack.dispute.fetch(2867).then((resp) => {
      expect(resp.message).toBe("Dispute retrieved");
    });
  });

  it("List transaction --> list transaction dispute for a transaction", () => {
    Paystack.dispute.listTransaction(2867).then((resp) => {
      expect(resp.message).toBe("Dispute retrieved successfully");
    });
  });

  it("Update --> update a particular dispute", () => {
    Paystack.dispute.update({ refund_amount: 1002 }, 2867).then((resp) => {
      expect(resp.message).toBe("Dispute updated successfully");
    });
  });

  it("Add evidence --> provide dispute evidence", () => {
    Paystack.dispute
      .addEvidence(
        {
          customer_email: "cus@gmail.com",
          customer_name: "Mensah King",
          customer_phone: "0802345167",
          service_details: "claim for buying product",
          delivery_address: "3a ladoke street ogbomoso",
        },
        2867
      )
      .then((resp) => {
        expect(resp).toHaveProperty("status");
      });
  });
});
