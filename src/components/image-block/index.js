import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

export default ({ image }) => (
  <div
    className={styles.imageBlock}
    style={{ backgroundImage: `url(${image.src})` }}
  />
);
