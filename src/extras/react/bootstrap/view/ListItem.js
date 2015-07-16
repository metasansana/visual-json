import React from 'react';

/**
 * ListItem
 */
class ListItem extends React.Component {

    render() {

        return React.createElement('li', this.props, ...this.props.children);

    }

}

ListItem.propTypes = {
    className:React.PropTypes.string
};

export default ListItem;
