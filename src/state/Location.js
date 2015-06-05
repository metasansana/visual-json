import React from 'react';

/**
 * Location modifies the windows location property.
 */
class Location extends React.Component {

    componentDidMount() {
      window.location = this.props.$template(this.props.url);
    }

    render() {
      return null;
    }

}

Location.propTypes = {
  url: React.PropTypes.string.isRequired,
  $template: React.PropTypes.func.isRequired
};

export default Location;
