const tape = require('tape');
const runDbBuild = require('../../db/dbBuild');
const paymentSettings = require('../models/paymentSettings')



tape("Checking getting all paymentSettings from the database", (t) => {

    runDbBuild().then(() => {
        paymentSettings.getPaymentSettings().then((settings) => {


            t.deepEqual(settings, [
                {
                    id: 1,
                    userid: 1,
                    currency: null,
                    request_payment_every_value: 2,
                    request_payment_very_unit: 'Month'
                },
                {
                    id: 2,
                    userid: 2,
                    currency: 'ILS',
                    request_payment_every_value: 5,
                    request_payment_very_unit: 'Week'
                },
                {
                    id: 3,
                    userid: 3,
                    currency: 'EUR',
                    request_payment_every_value: 6,
                    request_payment_very_unit: 'Month'
                },
                {
                    id: 4,
                    userid: 4,
                    currency: 'CNY',
                    request_payment_every_value: 1,
                    request_payment_very_unit: 'Appointment'
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






tape("Checking getting paymentSettings for specific user from the database", (t) => {

    const expected = [
        {
            id: 2,
            userid: 2,
            currency: 'ILS',
            request_payment_every_value: 5,
            request_payment_very_unit: 'Week'
        },
    ]

    runDbBuild().then(() => {
        paymentSettings.getPaymentSetttingsByUserId(2).then((actual) => {
            t.deepEqual(actual, expected)
            t.end();
        }).catch(err => {
            console.error(err)
            t.end();
        });
    })
});







tape("Edit paymentSettings for specific user in the database", (t) => {
    const updatedSettings = {
        userid: 3,
        currency: 'USD',
        request_payment_every_value: 5,
        request_payment_very_unit: 'Week',
    }

    runDbBuild().then(() => {
        paymentSettings.editPaymentSettings(updatedSettings).then(() => {
            paymentSettings.getPaymentSetttingsByUserId(3).then((actual) => {
                t.equal(actual[0].currency, 'USD');
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
