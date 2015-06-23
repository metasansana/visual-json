import React from 'react';
import jhr from 'jhr';
import dot  from 'dot-access';

var http = jhr.createAgent();

/**
 * StateRequest
 */
class StateRequest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {view: 'load'};
    }

    componentDidMount() {

        var self = this;
        var props = this.props;
        var url = props.url;
        var params = props.params;

        if (props.beforeRequest) {
            var ___ = props.beforeRequest(url, params);
            url = ___.url;
            params = ___.params;
        }

        http[self.props.method].call(http,
            props.$template(this.props.$template(url)), params).
            then(function (res) {

                var state = {};

                if (props.onSuccess)
                    props.onSuccess(res.data);

                if (props.resultKey)
                    state[props.resultKey] = res.data;

                if (props.successState)
                    state[props.stateKey] = props.successState;

                if (props.content)
                    return self.setState({view: 'show', data: res.data});

                if (props.parent)
                    props.parent.setState(state);

            }).
            catch(function (e) {

                if (!e instanceof jhr.HTTPError)
                    throw e;

                var state = {};

                if (props.onError)
                    props.onError(e);

                if (props.errorState)
                    state[props.stateKey] = props.errorState;

                if (props.content) {
                    console.log(e.stack);
                    return self.setState({view: 'error', data: e});
                }

                if (props.parent)
                    return props.parent.setState(state);

            });

    }

    render() {

        if (this.state.view === 'load')
            return React.createElement('b', null, this.props.loadLabel || 'Loading...');

        if (this.state.view === 'error')
            return React.createElement('b', null, this.state.data.message);

        var schema = {};
        var content = this.props.content;

        for (var key in content)
            if (content.hasOwnProperty(key))
                schema[key] = content[key];

        schema[this.props.resultKey] = this.state.data;

        return this.props.$parser.parse(schema, this.props.$context);

    }

}

StateRequest.propTypes = {
    $parser: React.PropTypes.object.isRequired,
    $context : React.PropTypes.object.isRequired,
    $template: React.PropTypes.func.isRequired,
    loadLabel: React.PropTypes.node,
    url: React.PropTypes.string.isRequired,
    method: React.PropTypes.string.isRequired,
    beforeRequest: React.PropTypes.func,
    params: React.PropTypes.object,
    parent: React.PropTypes.object,
    resultKey: React.PropTypes.string,
    onError: React.PropTypes.func,
    onSuccess: React.PropTypes.func,
    stateKey: React.PropTypes.string,
    errorState: React.PropTypes.string,
    successState: React.PropTypes.string,
    content: React.PropTypes.object
};


export default StateRequest;
