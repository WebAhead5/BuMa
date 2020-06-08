const tape = require('tape');
const appointments = require('../models/appointments')
const runDbBuild = require('../../db/dbBuild');


tape("Checking everything is working", (t) => {
    t.equal(1, 1);
    t.end();
});


tape("Checking getting all appointments from the database", (t) => {
    const expected =[
        {
            id: 1,
            userid: 1,
            day: new Date(new Date('2020-06-02').setHours(0, 0, 0, 0)),
            start_at: '08:00:00',
            end_at: '10:00:00',
            note: 'Note 1'
        },
        {
            id: 2,
            userid: 1,
            day: new Date(new Date('2020-06-20').setHours(0, 0, 0, 0)),
            start_at: '09:00:00',
            end_at: '11:00:00',
            note: 'Note 2'
        },
        {
            id: 3,
            userid: 1,
            day: new Date(new Date('2020-05-28').setHours(0, 0, 0, 0)),
            start_at: '12:00:00',
            end_at: '14:00:00',
            note: 'Note 3'
        },
        {
            id: 4,
            userid: 1,
            day: new Date(new Date('2020-05-25').setHours(0, 0, 0, 0)),
            start_at: '20:00:00',
            end_at: '21:00:00',
            note: 'Note 4'
        }
    ]
    
    t.plan(1);


    runDbBuild().then(() => {
        appointments.getAppointments().then((actual) => {
            t.deepEqual(actual,expected )
            t.end();

        }).catch(err => {
            console.error(err)
            t.end();
        });
    });
})


tape("Checking getting specific appointment from the database", (t) => {

    const expected = [
        {
            id: 1,
            userid: 1,
            day: new Date(new Date('2020-06-02').setHours(0, 0, 0, 0)),
            start_at: '08:00:00',
            end_at: '10:00:00',
            note: 'Note 1'
        }
    ]

    runDbBuild().then(() => {
        appointments.getAppointmentById(1).then((actual) => {
            t.deepEqual(actual,expected)
            t.end();
        }).catch(err => {
            console.error(err)
            t.end();
        });
    })
});




tape("Adding new appointment to the database", (t) => {

    t.plan(1);
    const newAppointment = {
        userid: 1,
        day: new Date(new Date('2012-04-25').setHours(0, 0, 0, 0)),
        start_at: '08:00:00',
        end_at: '10:00:00',
        note: 'Note 5'
    }

    runDbBuild().then(() => {
        appointments.addAppointment(newAppointment).then(() => {
            appointments.getAppointments().then((actual) => {
                t.equal(actual.length,5, "the new size should be 5" )
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


tape("Deleting appointment from database", (t) => {

    t.plan(1);
    runDbBuild().then(() => {
        appointments.deleteAppointment(1).then(() => {
            appointments.getAppointments().then((actual) => {
                t.equal(actual.length,3, "the new size should be 3" )
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


tape("Edit appointment in database", (t) => {
    t.plan(1);
    const newAppointment = {
        id: 1,
        userid: 1,
        day: new Date(new Date('2012-04-25').setHours(0, 0, 0, 0)),
        start_at: '08:00:00',
        end_at: '10:00:00',
        note: 'Note 6'
    }

    runDbBuild().then(() => {
        appointments.editAppointment(newAppointment).then(() => {
            appointments.getAppointmentById(1).then((actual) => {
                t.equal(actual[0].note,'Note 6');
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



