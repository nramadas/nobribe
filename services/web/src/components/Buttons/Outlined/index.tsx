import React from 'react';
import cx from 'classnames';

import styles from './index.module.scss';

export default function Outlined(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  return <button {...props} className={cx(props.className, styles.button)} />;
}
