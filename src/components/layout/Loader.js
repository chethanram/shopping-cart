import React, { Fragment } from 'react';
import {
    Spinner
} from 'react-bootstrap';

const Loader = () => <Fragment>
        <br />
        <br />
           <Spinner animation="grow" size="sm" />
           <Spinner animation="grow" />
        </Fragment>
   export default Loader;
