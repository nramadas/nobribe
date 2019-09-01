import React from 'react';

import Declare from './Declare';

import * as Buttons from '../Buttons';
import * as Inputs from '../Inputs';

import styles from './index.module.scss';

export default function ComponentExplorer() {
  return (
    <div className={styles.componentExplorer}>
      <Declare className={styles.section} title="Buttons">
        <div className={styles.group}>
          <Declare title={Buttons.Filled.name}>
            <Buttons.Filled>Example</Buttons.Filled>
          </Declare>
          <Declare title={Buttons.Text.name}>
            <Buttons.Text>Example</Buttons.Text>
          </Declare>
          <Declare title={Buttons.Outlined.name}>
            <Buttons.Outlined>Example</Buttons.Outlined>
          </Declare>
        </div>
      </Declare>
      <Declare className={styles.section} title="Inputs">
        <div className={styles.group}>
          <Declare title={Inputs.Text.name}>
            <Inputs.Text label={Inputs.Text.name} />
          </Declare>
          <Declare title={Inputs.Checkbox.name}>
            <Inputs.Checkbox />
          </Declare>
          <Declare title={Inputs.Radio.name}>
            <Inputs.Radio name="test" />
            <Inputs.Radio name="test" />
          </Declare>
        </div>
      </Declare>
    </div>
  );
}
