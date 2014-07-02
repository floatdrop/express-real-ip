'use strict';

module.exports = function (options) {
    options = options || {};
    options.headerName = options.headerName || 'X-Real-Ip';

    return function (req, res, next) {
        req.headers['x-forwarded-for'] =
            [req.header(options.headerName), req.headers['x-forwarded-for']]
            .filter(Boolean) // Remove falsy elements
            .join(', ');
        next();
    };
};
