import React from 'react';
import { Provider as UrqlProvider, createClient } from 'urql';
import { suspenseExchange } from '@urql/exchange-suspense';

import ComponentExplorer from '../ComponentExplorer';

import styles from './index.module.scss';

const urqlClient = createClient({
  url: 'http://localhost:4000/graphql',
  suspense: true,
  exchanges: [suspenseExchange],
});

export default function Root() {
  return (
    <UrqlProvider value={urqlClient}>
      <div className={styles.root}>
        <ComponentExplorer />
      </div>
    </UrqlProvider>
  );
}
