# express-real-ip [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]
> Get ip address from custom header

```js

var app = require('express')();
var getRealIp = require('express-real-ip')();

app.use(getRealIp);

app.get('/', function (req, res, next) {
    res.send(req.ip);
    next();
});

app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

// curl localhost:3000 -H "X-Real-Ip: 87.250.248.98"
// 87.250.248.98
```

# API

### express-real-ip([options])

Returns middleware function, that appends header value to X-Forwarded-For header (this is how express figures out `req.ip` value).

#### options

 * `headerName` - name of header, which contains real ip address (defaults to `X-Real-Ip`).

# License

MIT (c) 2014 Vsevolod Strukchinsky (floatdrop@gmail.com)

[npm-url]: https://npmjs.org/package/express-real-ip
[npm-image]: http://img.shields.io/npm/v/express-real-ip.svg

[travis-url]: https://travis-ci.org/floatdrop/express-real-ip
[travis-image]: http://img.shields.io/travis/floatdrop/express-real-ip.svg
