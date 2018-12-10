import React from 'react';

import styles from './styles.module.scss';

export default ({ children }) => (
  <div className={styles.quoteBlock}>
    <div className={styles.contentContainer}>{children}</div>
  </div>
);
