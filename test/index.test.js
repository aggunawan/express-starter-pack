require('dotenv').config();

var app = require('../app');
var request = require('supertest');
var mongoose = require('mongoose');
var faker = require('faker');

describe('GET /', function() {
    it('responds successfully', function(done) {
        request(app)
            .get('/')
            .end((err, res) => {
            	if (err) return done(err);
            	expect(res.body.app).toBe(process.env.APP);
            	done();
            });
    });
});

afterAll((done) => {
	mongoose.connection.close();
	done();
})
