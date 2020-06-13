const queries = require('../models/payments')

exports.getAllPayments = (req, res) => {
    queries.getPayments()
        .then(payments => res.status(200).json({ payments, code: 200 }))
        .catch(err => {
            console.error(err)
            return res.status(500).json({ error: err.code })
        })
}

exports.getSinglePayment = (req, res) => {
    queries.getPaymentById(req.params.id)
        .then(payment =>
            payment.length < 1 ? res.status(404).json({ message: 'No payment Found' }) :
            res.status(200).json({ report, code: 200 }))
        .catch(err => {
            return res.status(500).json({ error: err.code })
        })
}

exports.addSinglePayment = (req, res) => {
    const newPayment = {
        id: req.params.id,
        customerid: req.body.customerid,
        paymentdate: req.body.paymentdate,
        price: req.body.price,
        vat: req.body.vat,
        total: req.body.total
    }
    queries.addPayment(newPayment)
        .then(() => {
            res.status(200).json({ message: 'payment added successfully', code: 200 })
        })
        .catch(err => {
            return res.status(500).json({ error: err.code })
        });
}

exports.deletePayment = (req, res) => {
    const id = req.params.id
    queries.deletePayment(id)
        .then(() => res.status(200).json({ message: 'Payment Deleted successfully', code: 200 }))
        .catch(err => {
            return res.status(500).json({ error: err.code })
        })
}