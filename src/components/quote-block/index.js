import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

export default ({ background, children }) => (
  <div
    className={classNames(styles.quoteBlock, {
      [styles[background]]: background,
    })}
  >
    <div className={styles.contentContainer}>{children}</div>
  </div>
);
