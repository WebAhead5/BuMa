const express = require('express');
const router = express.Router();
const customers = require('./customers')
const appointments = require('./appointments')

router.get('/user/admin/customers', customers.getAllCustomers)
router.get('/user/admin/customer/:id', customers.getOneCustomer)
router.post('/user/admin/add-customer', customers.addOneCustomer)
router.delete('/user/admin/delete-customer/:id', customers.deleteCustomer)
router.put('/user/admin/edit-customer/:id', customers.updateCustomer)
router.get('/user/admin/appointments', appointments.getAllAppointments)
router.get('/user/admin/appointment/:id', appointments.getOneAppointment)
router.post('/user/admin/add-appointment', appointments.addOneAppointment)
router.delete('/user/admin/delete-appointment/:id', appointments.deleteAppointment)
router.put('/user/admin/edit-appointment/:id', appointments.updateAppointment)

module.exports = router;