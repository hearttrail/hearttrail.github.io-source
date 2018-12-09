import classNames from 'classnames';
import Link from 'gatsby-link';
import React, { PureComponent } from 'react';

import logoDark from './images/logo-dark.svg';
import logoLight from './images/logo-light.svg';
import styles from './styles.module.scss';

export default class Navigation extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isTransparent: true,
      viewportHeight: 200,
    };

    this.handleResize = this.handleResize.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentWillMount() {
    this.handleResize();
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({
      viewportHeight: window.innerHeight,
    });
  }

  handleScroll() {
    if (!window) {
      return;
    }

    const { isTransparent, viewportHeight } = this.state;

    if (window.pageYOffset >= viewportHeight && isTransparent) {
      this.setState({
        isTransparent: false,
      });
    } else if (window.pageYOffset < viewportHeight && !isTransparent) {
      this.setState({
        isTransparent: true,
      });
    }
  }

  render() {
    const { isTransparent } = this.state;

    return (
      <nav
        role="navigation"
        className={classNames(styles.navigation, {
          [styles.isTransparent]: isTransparent,
        })}
      >
        <Link to="/" className={styles.logoContainer}>
          <img
            src={logoDark}
            className={classNames(styles.dark, styles.logo)}
          />
          <img
            src={logoLight}
            className={classNames(styles.light, styles.logo)}
          />
        </Link>

        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link to="/news">News</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
