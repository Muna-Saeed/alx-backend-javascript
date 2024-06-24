const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./api');  // Ensure this line points to where your Express server is defined
const { expect } = chai;

chai.use(chaiHttp);

describe('Index page', () => {
  it('should return status 200', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should return the correct message', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });
});
