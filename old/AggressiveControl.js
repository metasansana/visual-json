import Control from './Control';

/**
 * AggressiveControl for controls that react to any activity.
 */
class AggressiveControl extends Control{

    click(e) {
        this.props.handler.buttonHasBeenClicked(e.target.name, this, e);
    }

    change(e) {
        this.props.handler.valueHasBeenChanged(e.target.name, e.target.value, this, e);
    }

    blur(e) {
        this.props.handler.focusHasBeenLost(e.target.name, e.target.value, this, e);
    }

    focus(e) {
        this.props.handler.focusHasBeenReceived(e.target.name, e.target.value, this, e);
    }
}

export default AggressiveControl;

