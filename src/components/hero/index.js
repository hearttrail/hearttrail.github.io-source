import React from 'react';
import Img from 'gatsby-image';

import styles from './styles.module.scss';

export default ({ data }) => (
  <div className={styles.hero}>
    <div
      className={styles.image}
      style={{ backgroundImage: `url(${data.heroImage.file.url})` }}
    />
    <div className={styles.heroDetails}>
      <h3 className={styles.heroHeadline}>{data.heroText}</h3>
      <p className={styles.heroTitle}>{data.heroSubtext}</p>
    </div>
  </div>
);
