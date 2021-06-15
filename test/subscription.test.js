require("dotenv").config();
const Paystack = require("../main")(process.env.PAYSTACK_SECRET);
