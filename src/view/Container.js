import React from 'react';

/**
 * Container renders a bootstrap container.
 */
class Container extends React.Component {

    render() {

        var rows = this.props.rows.map(function (row) {

            return (
                <div className={row.className} {...row.attrs}>
                    {row.content}
                </div>
            );

        })

        return (
            <div className={(this.props.className)?this.props.className:'container'}>
                {rows}
            </div>
        );
    }
}

Container.propTypes = {
    row: React.PropTypes.arrayOf(React.PropTypes.shape({
            className: React.PropTypes.string.isRequired,
            content: React.PropTypes.node,
            attrs:React.PropTypes.object
        }
    ))

}
export default Container;

