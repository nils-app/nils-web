import React from "react";
import { Button, Alert } from "react-bootstrap";

import useFetch from "util/fetch";
import Loader from "components/Loader";

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
      <Loader />
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

      <h4>HTTP-01 challenge</h4>
      <p>
        Upload a file to <code>http://{"<"}YOUR_DOMAIN{">"}/.well-known/nils</code> , so that it is
        accesible at <a href={ `http://${props.domain}/.well-known/nils` }><b>{props.domain}/.well-known/nils</b></a> * with the
        following content:
      </p>
      { isLoading ? loading : (
        <pre className="code">
          <code>{verification && verification.token}</code>
        </pre>
      ) }
      <p className="text-muted">
        <small>* We'll try both HTTP and HTTPS when verifying the domain, and it will work if either works.</small>
      </p>

      <hr />

      <h4>DNS-01 challenge</h4>
      <p>This challenge asks you to prove that you control the DNS for your domain name by putting a specific value in a TXT record under that domain name.</p>
      <p>Add the following <b>TXT</b> record in your DNS provider at the root.</p>
      { isLoading ? loading : (
        <pre className="code">
          <code>nils={verification && verification.token}</code>
        </pre>
      ) }

      <p className="text-muted">
        <small>Some DNS providers take up to 24h to propagate changes, your token will not change so you can come back tomorrow and continue the verification process.</small>
      </p>

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
