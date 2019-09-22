import React from "react";
import { Image } from "react-bootstrap";

const logo = require('assets/img/logo.png');

export default () => (
    <Image
        style={ { width: '1em' } }
        src={ logo }
        alt="N"
    />
);
