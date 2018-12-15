import React from 'react';

import styles from './styles.module.scss';

export default ({ email, instagramUrl }) => (
  <footer className={styles.footer}>
    <p>
      <a href={instagramUrl}>Follow us on instagram</a> or{' '}
      <a href={`mailto:${email}`}>shoot us an email</a>
    </p>
  </footer>
);
