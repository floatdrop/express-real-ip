/* global describe, it */

'use strict';

var request = require('supertest');
require('should');

function app () {
    return require('express')()
        .enable('trust proxy')
        .use(require('..')())
        .get('/', function (req, res) {
            res.send(req.ip);
        });
}

describe('express-request-id', function () {
    it('should set request ip to 127.0.0.1 without headers', function (done) {
        request(app())
            .get('/')
            .expect('127.0.0.1')
            .end(done);
    });

    it('should set request ip from X-Real-IP', function (done) {
        request(app())
            .get('/')
            .set('X-Real-Ip', '87.250.248.98')
            .expect('87.250.248.98')
            .end(done);
    });

    it('should set request ip from X-Forwarded-For', function (done) {
        request(app())
            .get('/')
            .set('X-Forwarded-For', '87.250.248.98')
            .expect('87.250.248.98')
            .end(done);
    });

    it('should set request ip from X-Real-Ip when X-Forwarded-For is present', function (done) {
        request(app())
            .get('/')
            .set('X-Forwarded-For', '87.250.248.98')
            .set('X-Real-Ip', '87.250.248.99')
            .expect('87.250.248.99')
            .end(done);
    });

});
