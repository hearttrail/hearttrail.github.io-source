import React from 'react';

import styles from './styles.module.scss';

export default () => (
  <div className={styles.mapContainer}>
    <div>
      <iframe
        src="https://snazzymaps.com/embed/119288"
        width="100%"
        height="400px"
        style={{ border: 'none' }}
      />
    </div>
    <div className={styles.content}>
      The Silo Art Trail is Australia's largest outdoor gallery.
      <ul>
        <li>Day 1: Rupanyup via Sheep Hills to Brim (75 kms)</li>
        <li>Day 2: Brim via Rosebery to Hopetoun (39km)</li>
        <li>Day 3: Hopetoun via Lascelles to Patchewallock (77km)</li>
      </ul>
    </div>
  </div>
);
