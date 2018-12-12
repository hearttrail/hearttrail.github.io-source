import Link from 'gatsby-link';
import React from 'react';

import constants from '../../constants';
import CtaButton from '../cta-button';
import styles from './styles.module.scss';

import HeartLogoImage from '../../images/heart-logo.png';

export default () => (
  <nav role="navigation" className={styles.navigation}>
    <Link className={styles.logoContainer} to="/">
      <img
        className={styles.logo}
        src={HeartLogoImage}
        alt="Heart Trail Logo"
      />
    </Link>

    <CtaButton className={styles.ctaButton} href={constants.DONOR_REGISTER_URL}>
      Join the donor register
    </CtaButton>
  </nav>
);
