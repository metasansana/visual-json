"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * FormHandler is the expected interface for dealing with these forms.
 *
 * This should be passed to a Form component or individual controls.
 * It is not required for display only components though.
 */

var FormHandler = (function () {
  function FormHandler() {
    _classCallCheck(this, FormHandler);
  }

  _createClass(FormHandler, [{
    key: "valueChanged",

    /**
     * valueChanged is called when onchange is fired.
     * @param {String} name The name of the DOM element
     * @param {String} value The value of the value attribute of DOM element
     * @param {ReactComponent} control The React component
     * @param {DOMNode} target
     */
    value: function valueChanged(name, value, control, target) {}
  }, {
    key: "focusReceived",

    /**
     * focusReceived is called when onfocus is fired.
     * @param {String} name The name of the DOM element
     * @param {String} value The value of the value attribute of DOM element
     * @param {ReactComponent} control The React component
     * @param {DOMNode} target
     */
    value: function focusReceived(name, value, control, target) {}
  }, {
    key: "focusLost",

    /**
     * focusLost is called when onblur is fired.
     * @param {String} name The name of the DOM element
     * @param {String} value The value of the value attribute of DOM element
     * @param {ReactComponent} control The React component
     * @param {DOMNode} target
     */
    value: function focusLost(name, value, control, target) {}
  }, {
    key: "clicked",

    /**
     * clicked is called when onclick is fired.
     * @param {String} name The name of the DOM element
     * @param {ReactComponent} control The React component
     * @param {DOMNode} target
     */
    value: function clicked(name, control, target) {}
  }]);

  return FormHandler;
})();

exports["default"] = FormHandler;
module.exports = exports["default"];