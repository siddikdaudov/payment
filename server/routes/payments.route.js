const { paymentsController } = require('../controllers/payments.controller');
const { Router } = require('express');

const router = Router();

router.post('/pay', paymentsController.pay);

module.exports = router;