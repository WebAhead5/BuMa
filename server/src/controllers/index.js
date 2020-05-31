const express = require('express');
const router = express.Router();
const customers = require('./customers')

router.get('/user/:id/customers', customers.getAllCustomers)
router.get('/user/:id/customer/:id', customers.getOneCustomer)

module.exports = router;