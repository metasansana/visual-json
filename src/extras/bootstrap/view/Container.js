import React from 'react';
import Row from './Row';

/**
 * Container
 */
class Container extends React.Component {

    render() {

        var childs = this.props.children;
        var tag = this.props.tag || 'section';

        if (!Array.isArray(childs)) childs = [childs];

        childs = childs.map((ele, key) => React.createElement(Row,
            {
                key: key,
                hasCols: this.props.rowsHaveCols,
                colClassName: this.props.colClassName
            }, ele));

        return React.createElement.apply(null, [tag, {className: this.props.className}].concat(childs));

    }

}

Container.propTypes = {
    className: React.PropTypes.string,
    rowsHaveCols: React.PropTypes.bool,
    colClassName: React.PropTypes.string
};

Container.defaultProps = {
    className: 'container-fluid',
    rowsHaveCols: true,
    colClassName: 'col-md-12'
};

export default Container
