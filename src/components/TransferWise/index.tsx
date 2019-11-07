import React from "react";

import twLogo from 'assets/img/transferwise_logo.png'

import styles from './index.module.scss';

export default () => {
  return (
    <div className={ styles.transferwise }>
      <span>Powered by</span>
      <img src={ twLogo } alt="TransferWise"/>
    </div>
  );
};
