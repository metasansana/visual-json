import React from 'react';
import DotAccess  from 'dot-access';


/**
 *  DefinitionList displays a definition list of the data supplied.
 *
 *  It useful for displaying readonly data rather than disabled input elements.
 */
class DefinitionList extends React.Component {

    render() {

        var self = this;
        var lists = [];

        var {data} = this.props;

        self.props.labels.forEach(function (label, i) {

            lists.push(
                React.createElement('dt', {key: i}, (label.labelComponent) ?
                    React.createElement(label.labelComponent, {
                        options: label.labelComponentOptions,
                        label: label
                    }, label.label) : label.label));

            var value = DotAccess.get(data, label.name);

            if (label.itemComponent)
                value =
                    React.createElement(label.itemComponent,
                        {
                            options: label.itemComponentOptions,
                            value: value, label: label, data: data
                        },
                        value);

            lists.push(React.createElement('dd', {key: i}, value));


        });


        return React.createElement('dl', {className: this.props.className}, lists);
    }
}

DefinitionList.propTypes = {
    className: React.PropTypes.string,
    data: React.PropTypes.object,
    labels: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            label: React.PropTypes.string.isRequired,
            name: React.PropTypes.string.isRequired,
            labelComponent: React.PropTypes.component,
            labelComponentOptions: React.PropTypes.object,
            itemComponent: React.PropTypes.component,
            itemComponentOptions: React.PropTypes.object
        })).isRequired
};

DefinitionList.defaultProps = {
    className: 'dl-horizontal',
    data: React.PropTypes.object
};

export default DefinitionList;