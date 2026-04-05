const request = require('supertest');
const app = require('../src/app');
const {expect} = require('chai');

describe('Tasks API', () => {
    it('should create a task', async() => {
        const res = await request(app)
        .post('/tasks')
        .send({title: 'Test Task', description: 'Test Desc'});

        expect(res.status).to.equal(201);
        expect(res.body).to.have.property('id');
    });

    it('should fetch tasks', async() => {
        const res = await request(app).get('/tasks');
        expect(res.status).to.equal(200);
    })
})