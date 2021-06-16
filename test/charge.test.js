require("dotenv").config();
const Paystack = require("../main")(process.env.PAYSTACK_SECRET);

describe("Charge Api --> configure payment channel", () => {
  it("Create --> initaite charge", () => {
    Paystack.charge
      .create({
        email: "customer@email.com",
        amount: "10000",
        metadata: {
          custom_fields: [
            {
              value: "makurdi",
              display_name: "Donation for",
              variable_name: "donation_for",
            },
          ],
        },
        bank: {
          code: "057",
          account_number: "0000000000",
        },
        birthday: "1995-12-23",
      })
      .then((resp) => {
        expect(resp.data).toHaveProperty("status", "success");
      });
  });

  it("Submit Pin --> continue charge with pin", () => {
    Paystack.charge.submitPin("1234", "5bwib5v6anhe9xa").then((resp) => {
      expect(resp.data).toHaveProperty("status", "success");
    });
  });

  it("SubmitOtp --> complete charge with otp", () => {
    Paystack.charge.submitOtp("123456", "5bwib5v6anhe9xa").then((resp) => {
      expect(resp.data).toHaveProperty("status", "success");
    });
  });

  it("SubmitPhone --> submit phone", () => {
    Paystack.charge
      .submitPhone("08012345678", "5bwib5v6anhe9xa")
      .then((resp) => {
        expect(resp.data).toHaveProperty("status", "success");
      });
  });

  it("SubmitBirthday --> submit birthday", () => {
    Paystack.charge
      .submitBirthday("1961-09-21", "5bwib5v6anhe9xa")
      .then((resp) => {
        expect(resp.data).toHaveProperty("status", "success");
      });
  });

  it("SubmitAddress --> submit address", () => {
    Paystack.charge
      .submitAddress(
        "140 N 2ND ST",
        "Yellow",
        "Lagos",
        123456,
        "5bwib5v6anhe9xa"
      )
      .then((resp) => {
        expect(resp.data).toHaveProperty("status", "success");
      });
  });

  it('Check --> check pending charges', ()=> {
      Paystack.charge.check('5bwib5v6anhe9xa').then(resp=>{
        expect(resp.data).toHaveProperty("status", "success");
      })
  })
});
