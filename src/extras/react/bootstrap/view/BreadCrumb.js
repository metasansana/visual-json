import React from 'react';

/**
 * BreadCrumb
 */
class BreadCrumb extends React.Component {

    render() {
        return React.createElement('ol', {className:'breadcrumb'}, ...this.props.children);
    }

}

BreadCrumb.propTypes = {};
export default BreadCrumb;
