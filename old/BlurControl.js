import Control from './Control';

/**
 * BlurControl for controls that should only be updated when onBlur is fired.
 */
class BlurControl extends Control{
    blur(e) {
        this.props.handler.focusHasBeenLost(e.target.name, e.target.value, this, e);
    }
}

export default BlurControl

