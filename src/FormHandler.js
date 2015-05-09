/**
 * FormHandler is the expected interface for dealing with these forms.
 *
 * This should be passed to a Form component or individual controls.
 * It is not required for display only components though.
 */
class FormHandler {

    /**
     * valueChanged is called when onchange is fired.
     * @param {String} name The name of the DOM element
     * @param {String} value The value of the value attribute of DOM element
     * @param {ReactComponent} control The React component
     * @param {DOMNode} target
     */
    valueChanged(name, value, control, target){

    }

    /**
     * focusReceived is called when onfocus is fired.
     * @param {String} name The name of the DOM element
     * @param {String} value The value of the value attribute of DOM element
     * @param {ReactComponent} control The React component
     * @param {DOMNode} target
     */
    focusReceived(name, value, control, target){

    }

    /**
     * focusLost is called when onblur is fired.
     * @param {String} name The name of the DOM element
     * @param {String} value The value of the value attribute of DOM element
     * @param {ReactComponent} control The React component
     * @param {DOMNode} target
     */
    focusLost(name, value, control, target){

    }

    /**
     * clicked is called when onclick is fired.
     * @param {String} name The name of the DOM element
     * @param {ReactComponent} control The React component
     * @param {DOMNode} target
     */
    clicked(name, control, target){

    }


}

export default FormHandler

