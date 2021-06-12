require("dotenv").config();
const Paystack = require("../main")(process.env.PAYSTACK_SECRET);

describe("Verification --> Perform Kyc", () => {
  it("Verify BVN Match --> account number and bvn match", () => {
//     Paystack.verify
//       .verifyBvn({
//         bvn: "00112233552",
//         account_number: "0011001122",
//         bank_code: "058",
//       })
//       .then((resp) => {
//         expect(resp.data).toEqual(
//           expect.objectContaining({
//             is_blacklisted: expect.any(Boolean),
//             account_number: expect.any(Boolean),
//           })
//         );
//       });
  });

  it("Resolve Account Number --> verify custormer account number", () => {
    // Paystack.verify.resolveAccount("0011001122", "058").then((resp) => {
    //   expect(resp.message).toBe("Account number resolved");
    // });
  });

  it("Resolve Card Bin --> infomation about a card", () => {
    Paystack.verify.resolveCardBin("539983").then((resp) => {
      expect(resp.status).toBe(true);
      expect(resp.data).toHaveProperty("bin", "539983");
    });
  });
});
