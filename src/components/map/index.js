import React from 'react';

import styles from './styles.module.scss';

export default () => (
  <div className={styles.mapBlock}>
    <div className={styles.mapContainer}>
      <iframe
        src="https://snazzymaps.com/embed/119288"
        width="100%"
        height="400px"
        style={{ border: 'none' }}
      />
    </div>
    <div className={styles.contentContainer}>
      The Silo Art Trail is Australia's largest outdoor gallery.
      <ul>
        <li>
          <strong>Day 1:</strong> Rupanyup via Sheep Hills to Brim (75 kms)
        </li>
        <li>
          <strong>Day 2:</strong> Brim via Rosebery to Hopetoun (39km)
        </li>
        <li>
          <strong>Day 3:</strong> Hopetoun via Lascelles to Patchewallock (77km)
        </li>
      </ul>
    </div>
  </div>
);
