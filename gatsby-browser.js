const ReactGA = require('react-ga');

exports.onClientEntry = () => {
  ReactGA.initialize('UA-132777016-1');
};

exports.onRouteUpdate = ({ location }) => {
  ReactGA.pageview(location.pathname + location.search);
};
