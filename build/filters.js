'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = {

    /**
     *
     * @param value
     * @param context
     * @param next
     * @returns {*}
     */
    uppercase: function uppercase(value, context, next) {

        if (typeof value === 'string') value = value.toUpperCase();

        return next(value);
    }
};
module.exports = exports['default'];