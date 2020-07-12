const app = require('../app.js');
const chai = require('chai');
const chaiHTTP = require('chai-http');
const expect = chai.expect;
chai.use(chaiHTTP);


describe('GET /about-page', () => {
  it('GET /about-page should return 200 response and contain correct html', done => {
    chai
      .request(app)
      .get('/about-page')
      .end((err, res) => {
        expect(res).to.have.status(200, done);
        expect(res.text).to.include('<h1>This is the About page</h1>');
        done();
      });
  });
});

describe('GET /jobs', () => {
  it('GET /jobs should return 200 response and contain correct html', done => {
    chai
      .request(app)
      .get('/jobs')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.include('<h1>Jobs at Acme Co.</h1>');
        done();
      });
  });
});

describe('GET /valves', () => {
  it('GET /valves should return 200 response and contain correct html', done => {
    chai
      .request(app)
      .get('/valves')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.include('<h1>Valves</h1>');
        done();
      });
  });
});

describe('GET /', () => {
  it('should return 404 response and contain error message', done => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.text).to.include('Error: Something went wrong');
        done();
      });
  });
});
