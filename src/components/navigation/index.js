import classNames from 'classnames';
import Link from 'gatsby-link';
import React, { PureComponent } from 'react';

import Hamburger from '../hamburger';
import logoDark from './images/logo-dark.svg';
import logoLight from './images/logo-light.svg';
import styles from './styles.module.scss';

const NAV_HEIGHT = 60;
export default class Navigation extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
      isTransparent: true,
      viewportHeight: 200,
    };

    this.handleResize = this.handleResize.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
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

    if (window.pageYOffset >= viewportHeight - NAV_HEIGHT && isTransparent) {
      this.setState({
        isTransparent: false,
      });
    } else if (
      window.pageYOffset < viewportHeight - NAV_HEIGHT &&
      !isTransparent
    ) {
      this.setState({
        isTransparent: true,
      });
    }
  }

  toggleMenu() {
    this.setState(state => ({
      isMenuOpen: !state.isMenuOpen,
    }));
  }

  render() {
    const { isMenuOpen, isTransparent } = this.state;

    return (
      <nav
        role="navigation"
        className={classNames(styles.navigation, {
          [styles.isTransparent]: isTransparent && !isMenuOpen,
        })}
      >
        <Hamburger
          className={styles.hamburger}
          isActive={isMenuOpen}
          isDark={isMenuOpen || !isTransparent}
          onClick={this.toggleMenu}
        />
        <div className={styles.logoContainer}>
          <Link className={classNames(styles.dark, styles.logo)} to="/">
            <img src={logoDark} />
          </Link>
          <Link className={classNames(styles.light, styles.logo)} to="/">
            <img src={logoLight} />
          </Link>
        </div>

        <ul
          className={classNames(styles.menu, { [styles.isActive]: isMenuOpen })}
        >
          <li className={styles.menuItem}>
            <Link className={styles.menuLink} to="/news">
              News
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
