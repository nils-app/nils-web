import React from "react";
import { Button, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useFetch from "util/fetch";

type Props = {
  domain: string;
  next: () => void;
  prev: () => void;
};

type Verification = {
  token: string,
};

export default (props: Props) => {
  const [isLoading, verification, hasError] = useFetch<Verification>(
    `/domains/verify/${props.domain}`,
    'GET',
  );

  const loading = (
    <p className='text-muted'>
      <FontAwesomeIcon icon='spinner' pulse /> Loading
    </p>
  );

  if (hasError) {
    return (
      <>
        <h3>Verify ownership</h3>
        <Alert variant='warning'>
          { hasError.message }
        </Alert>
        <p className="text-center">
          <Button variant="light" size="sm" onClick={props.prev}>
            Back
          </Button>
        </p>
      </>
    );
  }

  return (
    <>
      <h3>Verify ownership</h3>
      <p>
        In order to add "<a href={ `http://${props.domain}` }><b>{props.domain}</b></a>" to
        your account you'll need to verify it first.
      </p>
      <p>You can use any of the methods below:</p>

      <hr />

      <h4>File Verification</h4>
      <p>
        Upload a file called <b>nils.html</b> to your web server root, so that it is
        accesible at <a href={ `http://${props.domain}/nils.html` }><b>{props.domain}/nils.html</b></a> * with the
        following content:
      </p>
      { isLoading ? loading : (
        <pre className="code">
          <code>{verification && verification.token}</code>
        </pre>
      ) }
      <p className="text-muted">
        <small>* We'll try both http and https when verifying the domain, and it will work if either works.</small>
      </p>

      <hr />

      <h4>DNS Verification</h4>
      <p>Add the following <b>TXT</b> record in your DNS provider at the root.</p>
      { isLoading ? loading : (
        <pre className="code">
          <code>nils={verification && verification.token}</code>
        </pre>
      ) }

      <hr />

      <p className="text-center">
        <Button variant="light" size="sm" onClick={props.prev} className='mr-4'>
          Back
        </Button>
        <Button variant="secondary" size="sm" onClick={props.next} disabled={ isLoading }>
          Verify
        </Button>
      </p>
    </>
  );
};
