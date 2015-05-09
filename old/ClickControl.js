import Control from './Control'
/**
 * ClickControl for controls that should only react to click events.
 */
class ClickControl extends Control {

    click(e) {
        this.props.handler.buttonHasBeenClicked(e.target.name, this, e);
    }

}
export default ClickControl;

