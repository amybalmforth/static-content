const app = require('../app.js');
const chai = require('chai');
const chaiHTTP = require('chai-http');
const expect = chai.expect;
chai.use(chaiHTTP);


describe('GET /about-page', () => {
  it('should return 200 response', done => {
    chai
      .request(app)
      .get('/about-page')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
  it('should include correct html', done => {
    chai
      .request(app)
      .get('/about-page')
      .end((err, res) => {
        expect(res.text).to.include('<h1>This is the About page</h1>');
        done();
      });
  });
});

describe('GET /jobs', () => {
  it('should return 200 response', done => {
    chai
      .request(app)
      .get('/jobs')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
  it('should include correct html', done => {
    chai
      .request(app)
      .get('/jobs')
      .end((err, res) => {
        expect(res.text).to.include('<h1>Jobs at Acme Co.</h1>');
        done();
      });
  });
});

describe('GET /valves', () => {
  it('should return 200 response', done => {
    chai
      .request(app)
      .get('/valves')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
  it('should include correct html', done => {
    chai
      .request(app)
      .get('/valves')
      .end((err, res) => {
        expect(res.text).to.include('<h1>Valves</h1>');
        done();
      });
  });
});

describe('GET /', () => {
  it('should return 404 response', done => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});
