const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /available_payments returns correct object', (done) => {
    request.get(`${API_URL}/available_payments`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });

  it('POST /login returns correct message', (done) => {
    const userName = 'Betty';
    request.post(
      {
        url: `${API_URL}/login`,
        json: { userName }
      },
      (_err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal(`Welcome ${userName}`);
        done();
      }
    );
  });
});
