import React from 'react';
import Img from 'gatsby-image';

import styles from './hero.module.css';

export default ({ data }) => (
  <div className={styles.hero}>
    <Img
      className={styles.heroImage}
      alt={data.heroImage.description}
      sizes={data.heroImage.sizes}
    />
    <div className={styles.heroDetails}>
      <h3 className={styles.heroHeadline}>{data.heroText}</h3>
      <p className={styles.heroTitle}>{data.heroSubtext}</p>
    </div>
  </div>
);
