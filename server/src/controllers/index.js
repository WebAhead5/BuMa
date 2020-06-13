const express = require('express');
const router = express.Router();
const customers = require('./customers')
const appointments = require('./appointments')
const reports = require('./reports')
const users = require('./users')
const payments = require('./payments')
const paymentSettings = require('./paymentSettings')
const middlewares = require('../middlewares');




//Login route
router.post('/login', users.login)
//Logout route
router.delete('/logout', users.logout)


// Customers Route
router.get('/customers', middlewares.authCheck , customers.getAllCustomers)
router.get('/customer/:id', middlewares.authCheck,customers.getOneCustomer)
router.get('/customersbyuser', middlewares.authCheck, customers.getCustomersByUserId)
router.post('/add-customer',middlewares.authCheck, customers.addOneCustomer)
router.delete('/delete-customer/:id',middlewares.authCheck, customers.deleteCustomer)
router.put('/edit-customer/:id', middlewares.authCheck, customers.updateCustomer)
// Appointments Route
router.get('/appointments', middlewares.authCheck, appointments.getAllAppointments)
router.get('/appointment/:id', middlewares.authCheck, appointments.getOneAppointment)
router.post('/add-appointment', middlewares.authCheck, appointments.addOneAppointment)
router.delete('/delete-appointment/:id', middlewares.authCheck, appointments.deleteAppointment)
router.put('/edit-appointment/:id', middlewares.authCheck, appointments.updateAppointment)
router.get('/appointmentsbyuser', middlewares.authCheck, appointments.getAppointmentsByUserId)
//Users Route
router.get('/users', middlewares.authCheck, users.getUsers)
router.get('/users/:id', middlewares.authCheck, users.getOneUser)
router.delete('/delete-user/:id', middlewares.authCheck, users.deleteUser)
router.put('/edit-user/:id', middlewares.authCheck, users.updateUser)
//Signup route
router.post('/add-user',users.addUser)
//Reports route
router.get('/reports',middlewares.authCheck, reports.getAllReports)
router.get('/report/:id', middlewares.authCheck, reports.getSingleReport)
router.post('/add-report/', middlewares.authCheck, reports.addSingleReport)
router.delete('/delete-report/:id', middlewares.authCheck, reports.deleteReport)
//Payments Settings Route

router.get('/payment-settings', middlewares.authCheck, paymentSettings.getAllPaymentSettings)
router.get('/paymentSettings/:id', middlewares.authCheck, paymentSettings.getAllPaymentSettingsByUserId) 
router.put('/edit-payment-settings/:id' , middlewares.authCheck, paymentSettings.updateSettings)



router.get('/user/admin/payments', payments.getAllPayments)
router.get('/user/admin/payment/:id', payments.getSinglePayment)
router.post('/user/admin/add-payment/', payments.addSinglePayment)
router.delete('/user/admin/delete-payment/:id', payments.deletePayment)

module.exports = router;