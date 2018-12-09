import React from 'react';

import '../styles/base.scss';
import Navigation from '../components/navigation';

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    let header;

    let rootPath = `/`;
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`;
    }

    return (
      <div>
        <Navigation />
        {children()}
      </div>
    );
  }
}

export default Template;
