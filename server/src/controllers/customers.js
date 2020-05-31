const queries = require('../models/customers')

exports.getAllCustomers = (req, res) => {
    queries.getCustomers()
        .then(customers => res.status(200).json(customers))
        .catch(err => {
            console.error(err)
            return res.status(500).json({ error: err.code })
        })
}

exports.getOneCustomer = (req, res) => {
    queries.getCustomerById(req.params.id)
        .then(customer =>
            customer.length < 1 ? res.status(404).json({ message: 'No customer found' }) :
                res.status(200).json(customer))
        .catch(err => {
            console.error(err)
            return res.status(500).json({ error: err.code })
        })
}

exports.addOneCustomer = (req, res) => {
    const newCustomer = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        userid: req.body.userid,
        paymentStatus: req.body.paymentStatus,
        activityStatus: req.body.activityStatus,
        notes: req.body.notes,
        balance: req.body.balance
    }
    queries.addCustomer(newCustomer)
        .then(() => {
            res.status(200).json({ message: 'customer added successfully' })
        })
        .catch(err => {
            console.error(err)
            return res.status(500).json({ error: err.code })
        });
}

exports.deleteCustomer = (req, res) => {
    const id = req.params.id
    queries.deleteCustomer(id)
        .then(() => res.status(200).json({ message: 'Customer Deleted successfully' }))
        .catch(err => {
            console.error(err);
            return res.status(500).json({ error: err.code })
        })
}

exports.updateCustomer = (req, res) => {
    const updatedCustomer = {
        id: req.params.id,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        paymentStatus: req.body.paymentStatus,
        activityStatus: req.body.activityStatus,
        notes: req.body.notes,
        balance: req.body.balance
    }
    queries.editCustomer(updatedCustomer)
    .then(() => res.status(200).json({ message: 'Customer updated successfuly' }))
    .catch(err => {
        console.error(err);
        return res.status(500).json({ error: err.code })
    })
}