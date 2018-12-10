import React from 'react';

import styles from './styles.module.scss';

export default ({ children }) => <p className={styles.quote}>“{children}”</p>;
