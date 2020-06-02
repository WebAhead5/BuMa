const express = require('express');
const router = express.Router();
const customers = require('./customers')

router.get('/user/admin/customers', customers.getAllCustomers)
router.get('/user/admin/customer/:id', customers.getOneCustomer)
router.post('/user/admin/add-customer', customers.addOneCustomer)
router.delete('/user/admin/delete-customer/:id', customers.deleteCustomer)
router.put('/user/admin/edit-customer/:id', customers.updateCustomer)

module.exports = router;