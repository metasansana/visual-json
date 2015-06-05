"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Callbacks
 */

var Callbacks = (function () {
    function Callbacks(handler) {
        _classCallCheck(this, Callbacks);

        this.handler = handler;
    }

    _createClass(Callbacks, [{
        key: "onClick",
        value: function onClick(e) {
            this.handler.clicked(e.target.name, this, e.target);
        }
    }, {
        key: "onChange",
        value: function onChange(e) {
            this.handler.valueChanged(e.target.name, e.target.value, this, e.target);
        }
    }, {
        key: "onBlur",
        value: function onBlur(e) {
            this.handler.focusLost(e.target.name, e.target.value, this, e.target);
        }
    }, {
        key: "onFocus",
        value: function onFocus(e) {
            this.handler.focusReceived(e.target.name, e.target.value, this, e.target);
        }
    }]);

    return Callbacks;
})();

exports["default"] = Callbacks;
module.exports = exports["default"];