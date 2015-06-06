import React from 'react';

/**
 * Switch collects a set of components and renders each
 * based on a key.
 */
class Switch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        var views = this.props.views;
        var state = this.props.currentView || this.props.defaultView;

        if(!views.hasOwnProperty(state))
        throw new Error('Unknown view state '+state+'!');

        var ret = this.props.$parser.parse(views[state]);

        if(Array.isArray(ret))
        ret = React.createElement('span',null, ret);

        return ret;

    }

}

Switch.propTypes = {
    $parser: React.PropTypes.object.isRequired,
    currentView: React.PropTypes.string,
    views: React.PropTypes.object.isRequired,
    defaultView: React.PropTypes.string
};

export default Switch;
