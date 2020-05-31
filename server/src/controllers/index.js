const express = require('express');
const router = express.Router();
const customers = require('./customers')

router.get('/user/admin/customers', customers.getAllCustomers)
router.get('/user/admin/customer/:id', customers.getOneCustomer)

module.exports = router;