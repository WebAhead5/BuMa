const express = require('express');
const router = express.Router();
const customers = require('./customers')
const appointments = require('./appointments')
const reports = require('./reports')
const users = require('./users')
const login = require('./login');
const middlewares = require('../middlewares');




//Login route
router.post('/login', login.checkUserLogin);


// Customers Route
router.get('/user/admin/customers', middlewares.authCheck , customers.getAllCustomers)
router.get('/user/admin/customer/:id', customers.getOneCustomer)
router.post('/user/admin/add-customer', customers.addOneCustomer)
router.delete('/user/admin/delete-customer/:id', customers.deleteCustomer)
router.put('/user/admin/edit-customer/:id', customers.updateCustomer)
// Appointments Route
router.get('/user/admin/appointments', appointments.getAllAppointments)
router.get('/user/admin/appointment/:id', appointments.getOneAppointment)
router.post('/user/admin/add-appointment', appointments.addOneAppointment)
router.delete('/user/admin/delete-appointment/:id', appointments.deleteAppointment)
router.put('/user/admin/edit-appointment/:id', appointments.updateAppointment)
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
router.post('/user/admin/add-user', users.addUser)
router.delete('/user/admin/delete-user/:id', users.deleteUser)
router.put('/user/admin/edit-user/:id', users.updateUser)


router.get('/user/admin/reports', reports.getAllReports)
router.get('/user/admin/report/:id', reports.getSingleReport)
router.post('/user/admin/add-report/', reports.addSingleReport)
router.delete('/user/admin/delete-report/:id', reports.deleteReport)



module.exports = router;