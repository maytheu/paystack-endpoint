require("dotenv").config();
const Paystack = require("../main")(process.env.PAYSTACK_SECRET);

describe("Transfer Api --> automate sending money", () => {
  it("Initiate --> initiate transfet", () => {
    Paystack.transfer
      .initiate({
        source: "balance",
        reason: "Calm down",
        amount: 3794800,
        recipient: "RCP_gx2wn530m0i3w3m",
      })
      .then((resp) => {
        expect(resp.data).toEqual(
          expect.objectContaining({
            source: "balance",
            reason: "Calm down",
          })
        );
      });
  });

  it("Finalize --> finilize a transfer", () => {
    Paystack.transfer.finalize("TRF_vsyqdmlzble3uii", "928783").then((resp) => {
      expect(resp.data).toHaveProperty("status", "success");
    });
  });

  it("initiate Bulk --> initiate bulk transfer", () => {
    Paystack.transfer
      .initiateBulk({
        source: "balance",
        transfers: [
          {
            amount: 50000,
            recipient: "RCP_db342dvqvz9qcrn",
            reference: "ref_943899312",
          },
          {
            amount: 50000,
            recipient: "RCP_db342dvqvz9qcrn",
            reference: "ref_943889313",
          },
        ],
      })
      .then((resp) => {
        expect(resp.data).toEqual(
          expect.arrayContaining9[
            expect.objectContaining({
              recipient: expect.any(String),
              transfer_code: expect.any(String),
            })
          ]
        );
      });
  });

  it("List  --> List transfers made", () => {
    Paystack.transfer.list().then((resp) => {
      expect(resp.data).toEqual(
        expect.arrayContaining9([
          expect.objectContaining({
            recipient_code: expect.any(String),
            id: expect.any(Number),
          }),
        ])
      );
    });
  });

  it("Fetch --> get transfer details", () => {
    Paystack.transfer.fetch("TRF_vsyqdmlzble3uii").then((resp) => {
      expect(resp.message).toBe("Transfer retrieved");
    });
  });

  it("Verify --> verify transaction status", () => {
    Paystack.transfer.verify("ref_943899312").then((resp) => {
      expect(resp.data.recipient).toHaveProperty("account_number");
    });
  });

  it("Resend Otp --> generate new otp", () => {
    Paystack.transfer
      .resendOtp("TRF_vsyqdmlzble3uii", "resend_otp")
      .then((resp) => {
        expect(resp).toHaveProperty("status", "true");
      });
  });

  it("Disablle otp --> completre transaction without otp", () => {
    Paystack.transfer.disableOtp().then((resp) => {
      expect(resp).toHaveProperty("status", "true");
    });
  });

  it("Finally disbale otp --> disable otp on transfer", () => {
    Paystack.transfer.disableOtpFinally("928783").then((resp) => {
      expect(resp).toHaveProperty("status", "true");
    });
  });

  it("Enable otp --> turn otp on", () => {
    Paystack.transfer.enableOtp().then((resp) => {
      expect(resp).toHaveProperty("status", "true");
    });
  });
});
