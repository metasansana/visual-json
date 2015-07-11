import React from 'react';
import Column from './Column'

/**
 * Row
 */
class Row extends React.Component {

    render() {

        var childs = this.props.children;

        if(this.props.hasCols) {

            childs = Array.isArray(childs)? childs : [childs];

            childs = childs.map(function(child, key) {
                return React.createElement(Column, {
                    className:this.props.colClassName,
                    key:key
                }, child)
            }.bind(this));

        }

        return React.createElement('div', {className: 'row'}, childs);
    }

}

Row.propTypes = {
    hasCols: React.PropTypes.bool,
    colClassName: React.PropTypes.string
};

Row.defaultProps = {
    wrapInCols: true,
    colClassName: 'col-md-12'
};

export default Row
