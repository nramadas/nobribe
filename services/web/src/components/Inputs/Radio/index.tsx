import React from 'react';
import cx from 'classnames';

import styles from './index.module.scss';

export default function Radio(
  props: React.InputHTMLAttributes<HTMLInputElement>,
) {
  const { className, ...rest } = props;

  return (
    <label className={cx(styles.container, className)}>
      <input {...rest} className={styles.input} type="radio" />
      <div className={styles.hover} />
      <div className={styles.circle} />
      <div className={styles.dot} />
    </label>
  );
}
