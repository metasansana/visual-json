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

            var value = dot.get(data, label.name);

            if (label.filter)
                value = label.filter(value);


            lists.push(
                <dd key={'dd-' + i}>
                    {value}
                </dd>);

        });



        return (<dl className={this.props.className || 'dl-horizontal'}>{lists}</dl>);
    }
}

DefinitionList.propTypes = {
    labels: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            label: React.PropTypes.string.isRequired,
            name: React.PropTypes.string.isRequired
        })).isRequired,
    data: React.PropTypes.object,
    filter: React.PropTypes.func

};

export default DefinitionList;