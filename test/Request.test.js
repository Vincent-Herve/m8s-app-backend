const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');

const should = chai.should();
chai.use(chaiHttp);

describe('Test API', () => {
    // Test the GET route
    describe('GET /api/activity', () => {
        it('It should GET all activities', (done) => {
            chai.request(server)
                .get('/api/activity')
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                done();
                });
        });

        it('It should NOT GET all activities', (done) => {
            chai.request(server)
                .get('/api/activities')
                .end((err, response) => {
                    response.should.have.status(404);
                done();
                });
        });
    });

    describe('GET /api/tag', () => {
        it('It should GET all tags', (done) => {
            chai.request(server)
                .get('/api/tag')
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                done();
                });
        });
    });

    // Test the POST route
    describe('POST /api/activity', () => {
        it('It should POST a new activity', (done) => {
            const newActivity = {
                title: 'Futsal tonight',
                description: 'Ce soir futsal à la valbarelle',
                free_place: 5,
                location: 'Marseille',
                date: '2020-05-15',
                hour: '15:15',
                tagId: 2,
                userId: 2
            };
            chai.request(server)
                .post('/api/activity')
                .send(newActivity)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('title').eq('Futsal tonight');
                    response.body.should.have.property('description').eq('Ce soir futsal à la valbarelle');
                    response.body.should.have.property('free_place').eq(5);
                    response.body.should.have.property('location').eq('Marseille');
                    response.body.should.have.property('date').eq('2020-05-15');
                    response.body.should.have.property('hour').eq('15:15:00');
                    response.body.should.have.property('user_id').eq(2);
                done();
                });
        });
    });
});