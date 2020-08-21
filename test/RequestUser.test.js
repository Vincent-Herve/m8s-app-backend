const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();
chai.use(chaiHttp);

describe('Test API route user/auth', () => {

    // Test the GET route
    describe('GET /user/:id', () => {
        it('It should NOT GET one user', (done) => {
            chai.request(server)
                .get('/user/48')
                .end((err, response) => {
                    response.should.have.status(404);
                done();
                });
        });
        it('It should GET one user', (done) => {
            chai.request(server)
                .get('/user/4')
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('user');
                done();
                });
        });
    });

    // Test the POST route
    describe('POST /auth/signin', () => {
        it('It should POST connect user with wrong credential', (done) => {
            const credential = {
                email: 'vincent.herve2012@laposte.net',
                password: 'VincentM8'
            };
            chai.request(server)
                .post('/auth/signin')
                .send(credential)
                .end((err, response) => {
                    response.should.have.status(401);
                done();
                });
        });
        it('It should POST connect user with true credential', (done) => {
            const credential = {
                email: 'vincent.herve2012@laposte.net',
                password: 'VincentM8S'
            };
            chai.request(server)
                .post('/auth/signin')
                .send(credential)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('userId');
                    response.body.should.have.property('token');
                done();
                });
        });
    });
});