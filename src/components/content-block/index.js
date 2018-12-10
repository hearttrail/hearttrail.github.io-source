import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

export default ({ children, image }) => (
  <div
    className={classNames(styles.contentBlock, {
      [styles.imageLeft]: image.align === 'left',
    })}
  >
    <div className={styles.contentContainer}>
      <div className={styles.content}>{children}</div>
    </div>
    <div
      className={styles.imageContainer}
      style={{ backgroundImage: `url(${image.src})` }}
    />
  </div>
);
