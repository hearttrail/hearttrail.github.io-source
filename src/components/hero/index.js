import React, { PureComponent } from 'react';
import Img from 'gatsby-image';

import styles from './styles.module.scss';

export default class Hero extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      percentageScrolled: 0,
      viewportHeight: 500,
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
    if (!window) {
      return;
    }

    this.setState({
      viewportHeight: window.innerHeight,
    });
  }

  handleScroll() {
    if (!window) {
      return;
    }

    const { viewportHeight } = this.state;
    const percentageScrolled = Math.min(window.pageYOffset / viewportHeight, 1);

    this.setState({
      percentageScrolled,
    });
  }

  render() {
    const { data } = this.props;
    const { percentageScrolled } = this.state;

    return (
      <div className={styles.hero}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${data.heroImage.file.url})` }}
        />
        <div
          className={styles.heroDetails}
          style={{
            opacity: 1 - 1.4 * percentageScrolled,
            transform: `translateY(${percentageScrolled * 30}vh)`,
          }}
        >
          <h1 className={styles.heroText}>{data.heroText}</h1>
        </div>
      </div>
    );
  }
}
