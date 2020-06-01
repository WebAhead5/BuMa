const tape = require('tape');
const customers = require('../models/customers')


tape("Checking everything is working", (t) => {

    t.equal(1, 1);

    t.end();

});


tape("Checking getting all customers from the database", (t) => {


    customers.getCustomers().then((customers) => {

        t.deepEqual(customers, [
            {
                id: 1,
                name: 'Marwan',
                email: 'gobo@email.com',
                phone: 551554555,
                userid: 1,
                paymentstatus: true,
                activitystatus: true,
                notes: '',
                balance: '50'
            },
            {
                id: 2,
                name: 'Hashem',
                email: 'hashem@email.com',
                phone: 551534555,
                userid: 1,
                paymentstatus: true,
                activitystatus: true,
                notes: '',
                balance: '50'
            },
            {
                id: 3,
                name: 'Farid',
                email: 'farid@email.com',
                phone: 551254555,
                userid: 1,
                paymentstatus: true,
                activitystatus: true,
                notes: '',
                balance: '50'
            },
            {
                id: 4,
                name: 'Khalid',
                email: 'khalid@email.com',
                phone: 531554555,
                userid: 1,
                paymentstatus: true,
                activitystatus: true,
                notes: '',
                balance: '50'
            }
        ])
        t.end();

    })
        .catch(err => {
            console.error(err)
            t.end();
        });


});







tape("Checking getting specific customer from the database", (t) => {


    customers.getCustomerById(1).then((customer) => {


        t.deepEqual(customer,
            [
                {
                    id: 1,
                    name: 'Marwan',
                    email: 'gobo@email.com',
                    phone: 551554555,
                    userid: 1,
                    paymentstatus: true,
                    activitystatus: true,
                    notes: '',
                    balance: '50'
                }
            ])
        t.end();

    })
        .catch(err => {
            console.error(err)
            t.end();
        });


});


// tape("Adding new customer to the database", (t) => {

//     const newCustomer = {
//         name: "Mario",
//         email: "Mario@gmail.com",
//         phone: 0516415415,
//         userid: 1,
//         paymentStatus: true,
//         activityStatus: true,
//         notes: "",
//         balance: 0
//     }


//     customers.addCustomer(newCustomer).then(() => {



//         t.end();

//     })
//         .catch(err => {
//             console.error(err)
//             t.end();
//         });


// });



