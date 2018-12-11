import React, { PureComponent } from 'react';

import styles from './styles.module.scss';

import BikeImage from './images/bike.svg';
import LineImage from './images/line.svg';

const BIKE_WIDTH = 35;
const LINE_WIDTH = 90;

export default class Divider extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      percentageScrolled: 0,
      viewportHeight: 500,
      viewportWidth: 500,
    };

    this.dividerEl = null;
    this.setDividerElRef = element => {
      this.dividerEl = element;
    };

    this.handleResize = this.handleResize.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
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
      viewportWidth: window.innerWidth,
    });
  }

  handleScroll() {
    if (!window) {
      return;
    }

    const { viewportHeight } = this.state;
    const { y: elementTop } = this.dividerEl.getBoundingClientRect();

    const percentageScrolled = Math.min(
      (viewportHeight - elementTop) / viewportHeight,
      1
    );

    this.setState({
      percentageScrolled,
    });
  }

  render() {
    const { data } = this.props;
    const { percentageScrolled, viewportWidth } = this.state;

    const totalBikePathDistance = BIKE_WIDTH + viewportWidth - LINE_WIDTH;
    const bikeLeft = totalBikePathDistance * percentageScrolled - BIKE_WIDTH;

    const bikeStyles = {
      left: `${bikeLeft}px`,
    };

    return (
      <div className={styles.divider} ref={this.setDividerElRef}>
        <img className={styles.bike} src={BikeImage} style={bikeStyles} />
        <img className={styles.line} src={LineImage} />
      </div>
    );
  }
}
