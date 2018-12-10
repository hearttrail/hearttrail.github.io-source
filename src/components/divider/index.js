import React from 'react';

import styles from './styles.module.scss';

import BikeImage from './images/bike.svg';
import LineImage from './images/line.svg';

export default () => (
  <div className={styles.divider}>
    <img className={styles.line} src={LineImage} />
  </div>
);
