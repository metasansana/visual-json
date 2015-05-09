import Control from './Control';

/**
 * ChangeControl for controls that should only be updated when onChange is fired.
 */
class ChangeControl extends Control{

    change(e) {
        this.props.handler.valueHasBeenChanged(e.target.name, e.target.value, this, e);
    }


}

export default ChangeControl

