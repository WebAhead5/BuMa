const express = require('express');
const router = express.Router();
const customers = require('./customers')
const appointments = require('./appointments')
const reports = require('./reports')
const users = require('./users')
const login = require('./login');
const paymentSettings = require('./paymentSettings')
const middlewares = require('../middlewares');




//Login route
router.post('/user/admin/login', login.checkUserLogin);

//Logout route
router.delete('/user/admin/logout', users.logout)


// Customers Route
router.get('/user/admin/customers', middlewares.authCheck , customers.getAllCustomers)
router.get('/user/admin/customer/:id', middlewares.authCheck,customers.getOneCustomer)
router.get('/user/admin/customersbyuser', middlewares.authCheck, customers.getCustomersByUserId)
router.post('/user/admin/add-customer', customers.addOneCustomer)
router.delete('/user/admin/delete-customer/:id', customers.deleteCustomer)
router.put('/user/admin/edit-customer/:id', customers.updateCustomer)
// Appointments Route
router.get('/user/admin/appointments', appointments.getAllAppointments)
router.get('/user/admin/appointment/:id', appointments.getOneAppointment)
router.post('/user/admin/add-appointment', appointments.addOneAppointment)
router.delete('/user/admin/delete-appointment/:id', appointments.deleteAppointment)
router.put('/user/admin/edit-appointment/:id', appointments.updateAppointment)
router.get('/user/admin/appointmentsbyuser', middlewares.authCheck, appointments.getAppointmentsByUserId)
//Users Route
router.get('/user/admin/users', users.getUsers)
router.get('/user/admin/users/:id', users.getOneUser)
router.delete('/user/admin/delete-user/:id', users.deleteUser)
router.put('/user/admin/edit-user/:id', users.updateUser)
//Signup route
router.post('/user/admin/add-user',users.addUser)
//Reports route
router.get('/user/admin/reports',reports.getAllReports)
router.get('/user/admin/report/:id',reports.getSingleReport)
router.post('/user/admin/add-report/',reports.addSingleReport)
router.delete('/user/admin/delete-report/:id',reports.deleteReport)
//Payments Settings Route

router.get('/user/admin/payment-settings', paymentSettings.getAllPaymentSettings)
router.get('/user/admin/paymentSettings/:id',paymentSettings.getAllPaymentSettingsByUserId) 
router.put('/user/admin/edit-payment-settings/:id' , paymentSettings.updateSettings)




module.exports = router;