const tape = require('tape');
const runDbBuild = require('../../db/dbBuild');
const reports = require('../models/reports')



tape("Checking getting all reports from the database", (t) => {

    runDbBuild().then(() => {
        reports.getReports().then((reports) => {



            t.deepEqual(reports, [
                {
                    id: 1,
                    userid: 1,
                    creatingdate: new Date(new Date('2012-04-25').setHours(0, 0, 0, 0)),
                    pdfile: 'pdflink/1st.pdf'
                },
                {
                    id: 2,
                    userid: 1,
                    creatingdate: new Date(new Date('2012-04-26').setHours(0, 0, 0, 0)),
                    pdfile: 'pdflink/2nd.pdf'
                },
                {
                    id: 3,
                    userid: 1,
                    creatingdate: new Date(new Date('2012-04-27').setHours(0, 0, 0, 0)),
                    pdfile: 'pdflink/3rd.pdf'
                },
                {
                    id: 4,
                    userid: 1,
                    creatingdate: new Date(new Date('2012-04-28').setHours(0, 0, 0, 0)),
                    pdfile: 'pdflink/4th.pdf'
                }
            ])
            t.end();

        })
            .catch(err => {
                console.error(err)
                t.end();
            });

    })

});



tape("Checking getting specific report from the database", (t) => {

    const expected = [
        {
            id: 1,
            userid: 1,
            creatingdate: new Date(new Date('2012-04-25').setHours(0, 0, 0, 0)),
            pdfile: 'pdflink/1st.pdf'
        },
    ]

    runDbBuild().then(() => {
        reports.getReportById(1).then((actual) => {
            t.deepEqual(actual, expected)
            t.end();
        }).catch(err => {
            console.error(err)
            t.end();
        });
    })
});



tape("Adding new report to the database", (t) => {

    const newReport = {
        userid: 1,
        creatingdate: new Date(new Date('2012-04-29').setHours(0, 0, 0, 0)),
        pdfile: 'pdflink/5th.pdf'

    }

    runDbBuild().then(() => {
        reports.addReport(newReport).then(() => {
            reports.getReports().then((actual) => {
                t.equal(actual.length, 5, "the new size should be 5")
                t.end();
            }).catch(err => {
                console.error(err)
                t.end();
            });

        }).catch(err => {
            console.log(err);
            t.fail();
        });
    })

});



tape("Deleting report from database", (t) => {

    runDbBuild().then(() => {
        reports.deleteReport(1).then(() => {
            reports.getReports().then((actual) => {
                t.equal(actual.length, 3, "the new size should be 3")
                t.end();
            }).catch(err => {
                console.error(err)
                t.end();
            });
        }).catch(err => {
            console.error(err)
            t.fail();
        });
    })

});
