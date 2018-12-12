import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

export default ({ className, ...props }) => (
  <a className={classNames(styles.button, className)} {...props} />
);
