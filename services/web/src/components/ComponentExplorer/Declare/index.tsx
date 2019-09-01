import React from 'react';
import cx from 'classnames';

import styles from './index.module.scss';

interface Props {
  className?: string;
  children: React.ReactNode;
  title: string;
}

export default function Declare(props: Props) {
  return (
    <details open className={cx(props.className, styles.declare)}>
      <summary className={styles.summary}>{props.title}</summary>
      <div className={styles.content}>{props.children}</div>
    </details>
  );
}
