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
        customer.length < 1? res.status(404).json({ message : 'No customer found'}):
        res.status(200).json(customer))
    .catch(err => {
        console.error(err)
        return res.status(500).json({ error: err.code })
    })
}