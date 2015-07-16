import React from 'react';

/**
 * IconFont
 */
class IconFont extends React.Component {

    render() {
        var {className} = this.props;
        return React.createElement('span', {className:className});
    }

}

IconFont.propTypes = {
    className: React.PropTypes.string
};

export default IconFont
