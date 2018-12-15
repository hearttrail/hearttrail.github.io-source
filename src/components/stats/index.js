import React from 'react';

import styles from './styles.module.scss';

import ClockIcon from '../../images/icons/clock.svg';
import PencilIcon from '../../images/icons/pencil.svg';
import PeopleIcon from '../../images/icons/people.svg';

export default () => (
  <div className={styles.stats}>
    <div className={styles.stat}>
      <img alt="Clock icon" className={styles.image} src={ClockIcon} />
      <div>
        <div className={styles.number}>1400</div>
        <div className={styles.detail}>
          Australians currently waitlisted for a transplant.
        </div>
      </div>
    </div>
    <div className={styles.stat}>
      <img alt="Pencil icon" className={styles.image} src={PencilIcon} />
      <div>
        <div className={styles.number}>30</div>
        <div className={styles.detail}>
          Percent of Australians are currently registered organ donors despite
          69% believing that registering is important.
        </div>
      </div>
    </div>
    <div className={styles.stat}>
      <img alt="People icon" className={styles.image} src={PeopleIcon} />
      <div>
        <div className={styles.number}>10</div>
        <div className={styles.detail}>
          The number of lives you could change by becoming an organ donor.
        </div>
      </div>
    </div>
    <p className={styles.disclaimer}>
      * Source: donatelife.gov.au and transplant.org.au
    </p>
  </div>
);
