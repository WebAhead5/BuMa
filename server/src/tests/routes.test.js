const test = require('tape');
const request = require('supertest');
const app = require('../app');

// tests on get all customers
test('check get method on /customers', (t) => {
    request(app)
        .get('/user/admin/customers')
        .expect(200)
        .expect('content-type', /json/)
        .end((err, res) => {
            t.error(err);
            t.end();
        })
})

test('check response data if matches', (t) => {
    request(app)
        .get('/user/admin/customers')
        .expect(200)
        .expect('content-type', /json/)
        .end((err, res) => {
            const expected = {
                id: 1,
                name: "Marwan",
                email: "gobo@email.com",
                phone: 551554555,
                password: "123456",
                userid: 1,
                paymentstatus: true,
                activitystatus: true,
                notes: "",
                balance: "50"
            }
            t.error(err)
            t.same(res.body[0], expected);
            t.end()
        })
})

test('check response data if matches on data.name', (t) => {
    request(app)
        .get('/user/admin/customers')
        .expect(200)
        .expect('content-type', /json/)
        .end((err, res) => {
            const expected = {
                id: 1,
                name: "Marwan",
                email: "gobo@email.com",
                phone: 551554555,
                userid: 1,
                paymentstatus: true,
                activitystatus: true,
                notes: "",
                balance: "50"
            }
            t.error(err)
            t.same(res.body[0].name, expected.name, "should be equal to Marwan");
            t.end()
        })
})

// test get one customer by id

test('test get one customer by the id', (t) => {
    const id = 1
    request(app)
        .get(`/user/admin/customer/${id}`)
        .expect(200)
        .expect('content-type', /json/)
        .end((err, res) => {
            t.error(err)
            t.same(res.body[0].id, id)
            t.end()
        })
})

test('test error message if requesting a non exist customer', (t) => {
    const id = 8;
    request(app)
        .get(`/user/admin/customer/${id}`)
        .expect(404)
        .expect('content-type', /json/)
        .end((err, res) => {
            t.error(err)
            t.same(res.body.message, 'No customer found')
            t.end()
        })
})



