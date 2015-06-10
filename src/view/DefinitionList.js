import React from 'react';
import dot  from 'dot-access';


/**
 *  DefinitionList displays a definition list of the data supplied.
 *
 *  It useful for displaying readonly data rather than disabled input elements.
 */
class DefinitionList extends React.Component {

    render() {

        var self = this;
        var lists = [];

        var data = this.props.data || {};

        self.props.labels.forEach(function (label, i) {

            lists.push(<dt key={'dt-' + i}>{label.label}</dt>);

            var value = dot.get(data, label.name);

            if (label.filter)
                value = self.props.$filter(value, label.filter, data);

            lists.push(
                <dd key={'dd-' + i}>
                    {value}
                </dd>);

        });


        return (<dl className={this.props.className || 'dl-horizontal'}>{lists}</dl>);
    }
}

DefinitionList.propTypes = {
    $filter: React.PropTypes.func,
    labels: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            label: React.PropTypes.string.isRequired,
            name: React.PropTypes.string.isRequired,
            filter: React.PropTypes.string,
        })).isRequired,
    data: React.PropTypes.object,


};

export default DefinitionList;