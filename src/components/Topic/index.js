import {Link} from 'phenomic';
import React from 'react';

import styles from './index.css';

const Topic = ({__url, title}) => (
  <div className={styles.wrapper}>
    <Link to={__url} className={styles.title}>
      {title}
    </Link>
  </div>
);

export default Topic;
