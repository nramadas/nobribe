import React from 'react';
import cx from 'classnames';

import Checkmark from '../../Svgs/Checkmark';

import styles from './index.module.scss';

export default function Checkbox(
  props: React.InputHTMLAttributes<HTMLInputElement>,
) {
  const { className, ...rest } = props;

  return (
    <label className={cx(styles.container, className)}>
      <input {...rest} className={styles.input} type="checkbox" />
      <div className={styles.hover} />
      <div className={styles.box}>
        <Checkmark className={styles.checkmark} />
      </div>
    </label>
  );
}
