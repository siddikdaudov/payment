const Payment = require("../models/Payment.model");

module.exports.paymentsController = {
  pay: async (req, res) => {
    try {
      const { cardNumber, expirationDate, cvv, amount } = req.body;

      const payment = await Payment.create({
        cardNumber,
        expirationDate,
        cvv,
        amount
      });

      return res.json({ RequestId: payment._id, Amount: amount });

    } catch (err) {
      return res
        .status(400)
        .json({ error: `Ошибка при оплате: ${err.message}` });
    }
  },
};
