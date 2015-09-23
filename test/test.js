var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
	it('Respond with HELLO WORLD', function(done) {
		request(app).get('/').expect('Hello World', done); 
	});
});