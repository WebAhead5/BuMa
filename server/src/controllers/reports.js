const queries = require('../models/reports')

exports.getAllReports = (req, res) => {
    queries.getReports()
        .then(reports => res.status(200).json({ reports, code: 200 }))
        .catch(err => {
            console.error(err)
            return res.status(500).json({ error: err.code })
        })
}



exports.getSingleReport = (req, res) => {
    queries.getReportById(req.params.id)
        .then(report =>
            report.length < 1 ? res.status(404).json({ message: 'No customer found' }) :
                res.status(200).json({ report, code: 200 }))
        .catch(err => {
            console.error(err)
            return res.status(500).json({ error: err.code })
        })
}


exports.addSingleReport = (req, res) => {
    const newReport = {
        userid: req.body.userid,
        creatingdate: req.body.creatingdate,
        pdfile: req.body.pdfile,
       
    }
    queries.addReport(newReport)
        .then(() => {
            res.status(200).json({ message: 'report added successfully', code : 200})
        })
        .catch(err => {
            console.error(err)
            return res.status(500).json({ error: err.code })
        });
}



exports.deleteReport = (req, res) => {
    const id = req.params.id
    queries.deleteReport(id)
        .then(() => res.status(200).json({ message: 'Report Deleted successfully', code: 200 }))
        .catch(err => {
            console.error(err);
            return res.status(500).json({ error: err.code })
        })
}