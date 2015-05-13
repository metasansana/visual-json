/**
 * Callbacks
 */
class Callbacks {

    constructor(handler) {

        this.handler = handler;
    }

    onClick(e) {
        this.handler.clicked(e.target.name, this, e.target);
    }

    onChange(e) {
        this.handler.valueChanged(e.target.name, e.target.value, this, e.target);
    }

    onBlur(e) {
        this.handler.focusLost(e.target.name, e.target.value, this, e.target);
    }

    onFocus(e) {
        this.handler.focusReceived(e.target.name, e.target.value, this, e.target);
    }




}

export default Callbacks;

