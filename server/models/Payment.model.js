const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({
  cardNumber: Number,
  expirationDate: String,
  cvv: Number,
  amount: Number,
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
