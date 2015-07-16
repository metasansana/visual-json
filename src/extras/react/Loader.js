import React from 'react';
import Tree from '../../../../core/Tree';

/**
 * Loader is used to load remote content.
 */
class Loader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {status: 'loading'};
    }

    componentDidMount() {

        if (this.state.status !== 'loading')
            this.props.promise().
                then(function (res) {
                    this.props.$scope.set('response', this.props.responseAdapter(res));
                    this.setState({status: 'loaded'});
                    return res;
                }).
                catch(function (e) {
                    this.props.$scope.set('error', this.props.errorAdapter(e));
                    this.setState({status: 'error'});
                    return e;
                });
    }

    render() {

        if (this.state.status === 'loaded')
            return $environment.parse(new Tree(this.props.loadedView), this.props.$scope);

        if (this.state.status === 'error')
            return $environment.parse(new Tree(this.props.errorView), this.props.$scope);

        return this.props.children;

    }

}

Loader.propTypes = {
    $scope: React.propTypes.object,
    $environment: React.PropTypes.object,
    responseAdapter: React.PropTypes.object,
    errorAdapter: React.PropTypes.object,
    promise: React.propTypes.func,
    loadedView: React.PropTypes.object,
    errorView: React.PropTypes.object
};

Loader.defaultProps = {
    responseAdapter: (res)=>res,
    errorAdapter: (e)=>e
};

export default Loader;
