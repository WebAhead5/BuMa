const queries = require('../models/appointments')

exports.getAllAppointments = (req, res) => {
    queries.getAppointments()
        .then(appointments => res.status(200).json({appointments, code: 200}))
        .catch(err => {
            console.error(err)
            return res.status(500).json({ error: err.code })
        })
}

exports.getOneAppointment = (req, res) => {
    queries.getAppointmentById(req.params.id)
        .then(appointment =>
            appointment.length < 1 ? res.status(404).json({ message: 'No appointment found' }) :
                res.status(200).json(appointment))
        .catch(err => {
            console.error(err)
            return res.status(500).json({ error: err.code })
        })
}

exports.addOneAppointment = (req, res) => {
    const newAppointment = {
        userid: req.body.userid,
        day : req.body.day,
        start_at : req.body.start_at,
        end_at : req.body.end_at,
        note: req.body.note
    }
    queries.addAppointment(newAppointment)
        .then(() => {
            res.status(200).json({ message: 'appointment added successfully' })
        })
        .catch(err => {
            console.error(err)
            return res.status(500).json({ error: err.code })
        });
}

exports.deleteAppointment = (req, res) => {
    const id = req.params.id
    queries.deleteAppointment(id)
        .then(() => res.status(200).json({ message: 'Appointment Deleted successfully', code: 200 }))
        .catch(err => {
            console.error(err);
            return res.status(500).json({ error: err.code })
        })
}

exports.updateAppointment = (req, res) => {
    const updatedAppointment = {
        userid: req.body.userid,
        day : req.body.day,
        start_at : req.body.start_at,
        end_at : req.body.end_at,
        note: req.body.note
    }
    queries.editAppointment(updatedAppointment)
    .then(() => res.status(200).json({ message: 'Appointment updated successfuly' }))
    .catch(err => {
        console.error(err);
        return res.status(500).json({ error: err.code })
    })
}