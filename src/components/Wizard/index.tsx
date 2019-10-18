import React from "react";
import classNames from 'classnames';

import styles from './wizard.module.scss';

type Props = {
  steps: string[],
  active: number,
};

export default (props: Props) => {
  return (
    <ul className={ styles.wizard }>
      { props.steps.map((step, $index) => {
        const classes = classNames({
          [styles.done]: $index <= props.active,
          [styles.active]: $index === props.active,
        });

        return (
          <li key={ step } className={ classes }>
            <div className={ styles.step }>
              { $index + 1 }
            </div>
            <div className={ styles.label }>
              { step }
            </div>
          </li>
        );
      }) }
    </ul>
  );
};
