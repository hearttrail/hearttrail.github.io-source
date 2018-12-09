import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

export default ({ className, isActive, isDark, onClick }) => (
  <button
    className={classNames(
      className,
      styles.hamburger,
      styles['hamburger--vortex'],
      {
        [styles['is-active']]: isActive,
        [styles.dark]: isDark,
      }
    )}
    onClick={onClick}
    type="button"
  >
    <span className={styles['hamburger-box']}>
      <span className={styles['hamburger-inner']} />
    </span>
  </button>
);
