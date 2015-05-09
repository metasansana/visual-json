import React from 'react';
import dot  from 'dot-component';


/**
 *  DefinitionList displays a definition list of the data supplied.
 *
 *  It useful for displaying readonly data rather than disabled input elements.
 */
class DefinitionList extends React.Component {

    render() {

        var self = this;
        var lists = [];

        var data = this.props.data || this.props.defaultValue;

        self.props.labels.forEach(function (label, i) {

            lists.push(<dt key={'dt-' + i}>{label.label}</dt>);

            lists.push(
                <dd key={'dd-' + i}>
                 {dot.get(data, label.name)}
                </dd>);

        });

        return (<dl className={this.props.className || 'dl-horizontal'}>{lists}</dl>);
    }
}

DefinitionList.create = function($schema,processor,filter){

    var data = $schema.defaultValue || $schema.data;

    if (data) {

        data = {};

        $schema.labels.map(function (label) {
            dot.set(data, label.name, filter.filter(label.filters, dot.get(data, label.name)));
        });

    }

    return React.createElement(DefinitionList, $schema);

}

DefinitionList.propTypes = {
    labels: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            label: React.PropTypes.string.isRequired,
            name: React.PropTypes.string.isRequired,
            filter: React.PropTypes.string
        })).isRequired,
    data: React.PropTypes.object

};

export default DefinitionList;