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
router.post('/user/admin/add-customer',middlewares.authCheck, customers.addOneCustomer)
router.delete('/user/admin/delete-customer/:id',middlewares.authCheck, customers.deleteCustomer)
router.put('/user/admin/edit-customer/:id', middlewares.authCheck, customers.updateCustomer)
// Appointments Route
router.get('/user/admin/appointments', middlewares.authCheck, appointments.getAllAppointments)
router.get('/user/admin/appointment/:id', middlewares.authCheck, appointments.getOneAppointment)
router.post('/user/admin/add-appointment', middlewares.authCheck, appointments.addOneAppointment)
router.delete('/user/admin/delete-appointment/:id', middlewares.authCheck, appointments.deleteAppointment)
router.put('/user/admin/edit-appointment/:id', middlewares.authCheck, appointments.updateAppointment)
router.get('/user/admin/appointmentsbyuser', middlewares.authCheck, appointments.getAppointmentsByUserId)
//Users Route
router.get('/user/admin/users', middlewares.authCheck, users.getUsers)
router.get('/user/admin/users/:id', middlewares.authCheck, users.getOneUser)
router.delete('/user/admin/delete-user/:id', middlewares.authCheck, users.deleteUser)
router.put('/user/admin/edit-user/:id', middlewares.authCheck, users.updateUser)
//Signup route
router.post('/user/admin/add-user',users.addUser)
//Reports route
router.get('/user/admin/reports',middlewares.authCheck, reports.getAllReports)
router.get('/user/admin/report/:id', middlewares.authCheck, reports.getSingleReport)
router.post('/user/admin/add-report/', middlewares.authCheck, reports.addSingleReport)
router.delete('/user/admin/delete-report/:id', middlewares.authCheck, reports.deleteReport)
//Payments Settings Route

router.get('/user/admin/payment-settings', middlewares.authCheck, paymentSettings.getAllPaymentSettings)
router.get('/user/admin/paymentSettings/:id', middlewares.authCheck, paymentSettings.getAllPaymentSettingsByUserId) 
router.put('/user/admin/edit-payment-settings/:id' , middlewares.authCheck, paymentSettings.updateSettings)




module.exports = router;