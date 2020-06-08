const tape = require('tape');
const users = require('../models/users')
const runDbBuild = require('../../db/dbBuild');


tape("users modules -  Checking everything is working", (t) => {
    t.equal(1, 1);
    t.end();
});



tape("Getting all users", (t) => {
    const expected =[
        {
            id: 1,
            first_name: 'Morad',
            last_name: 'Abed',
            email: 'moraabed@email.com',
            username: 'morad',
            password: '111',
            phone: '0500500506',
            business_name: 'Microsoft',
            business_logo: 'http://morad_logo.jpg',
            crn: '1234',
            business_address: '1, Akko, Is'

        },
       

        {
            id: 2,
            first_name: 'Amir',
            last_name: 'Fahoum',
            email: 'amirfahoum@email.com',
            username: 'amir',
            password: '222',
            phone: '0544444444',
            business_name: 'Google',
            business_logo: 'http://amir_logo.jpg',
            crn: '444',
            business_address: '1, Akko, Is'
        }
    ]
    
    t.plan(1);


    runDbBuild().then(() => {
        users.getUsers().then((actual) => {
            t.deepEqual(actual,expected )
            t.end();

        }).catch(err => {
            console.error(err)
            t.end();
        });
    });
})


tape("Get user by id", (t) => {

    const expected = [
        {
            id: 1,
            first_name: 'Morad',
            last_name: 'Abed',
            email: 'moraabed@email.com',
            username: 'morad',
            password: '111',
            phone: '0500500506',
            business_name: 'Microsoft',
            business_logo: 'http://morad_logo.jpg',
            crn: '1234',
            business_address: '1, Akko, Is'
        }
    ]

    runDbBuild().then(() => {
        users.getUserById(1).then((actual) => {
            t.deepEqual(actual,expected)
            t.end();
        }).catch(err => {
            console.error(err)
            t.end();
        });
    })
});




tape("Adding new user", (t) => {
    
    t.plan(1);
    const newUser = {
        first_name: 'Hadi',
        last_name: 'Khalil',
        email: 'hadiKhalil@email.com',
        username: 'hadi',
        password: '666',
        phone: '050033306',
        business_name: 'Apple',
        business_logo: 'http://hdi_logo.jpg',
        crn: '78677',
        business_address: '7, Haifa'
    }

    runDbBuild().then(() => {
        users.addUser(newUser).then(() => {
            users.getUsers().then((actual) => {
                t.equal(actual.length,3, "the new size should be 3" )
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


tape("Deleting user", (t) => {
    t.plan(1);
    runDbBuild().then(() => {
        users.deleteUser(1).then(() => {
            users.getUsers().then((actual) => {
                t.equal(actual.length,1, "the new size should be 1" )
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


tape("Edit user", (t) => {
    t.plan(1);
    const newUser = {
        id: 1,
        first_name: 'Hadi',
        last_name: 'Khalil',
        email: 'hadiKhalil@email.com',
        username: 'hadi',
        password: '666',
        phone: '050033306',
        business_name: 'Apple',
        business_logo: 'http://hdi_logo.jpg',
        crn: '78677',
        business_address: '7, Haifa'
    };

    runDbBuild().then(() => {
        users.editUser(newUser).then(() => {
            users.getUserById(1).then((actual) => {
                t.equal(actual[0].first_name,'Hadi');
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



