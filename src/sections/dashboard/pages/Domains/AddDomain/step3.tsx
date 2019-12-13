import React, { useEffect } from "react";
import { Button, Alert } from "react-bootstrap";

import useFetch from "util/fetch";
import { useStateValue } from "store/state";
import Loader from "components/Loader";

type Props = {
  domain: string;
  next: () => void;
  prev: () => void;
};

export default (props: Props) => {
  const { dispatch } = useStateValue();
  const [isLoading, newDomain, hasError] = useFetch<any>(
    `/domains/verify/${props.domain}`,
    'POST',
  );

  useEffect(() => {
    if (!newDomain) {
      return;
    }
    dispatch({
      type: 'addDomain',
      payload: newDomain,
    });
  }, [newDomain, dispatch]);

  let content;
  if (isLoading) {
    content = (
      <h3 className="text-center text-muted my-5">
        <Loader text='Verifying...' />
      </h3>
    );
  } else if (hasError) {
    console.log(hasError.errors, hasError.errors.length);
    let errors: any = (
      <p>
        { hasError.message }
      </p>
    );
    if (hasError.errors.length > 0) {
      errors = (
        <ul>
          { hasError.errors.map((error, $index) => (
            <li key={ $index }>
              { error }
            </li>
          )) }
        </ul>
      );
    }
    content = (
      <>
        <Alert variant='warning' style={ { wordWrap: 'break-word' } }>
          <h4>Verification failed</h4>
          { errors }
          <p><em>If using DNS verification changes may take up to 24h to propagate.</em></p>
        </Alert>
      </>
    );
  } else {
    content = (
      <Alert variant='success'>
        <p><b>Verified!</b></p>
        <p><a href={ `http://${props.domain}` }><b>{props.domain}</b></a> has been added to your account.</p>
      </Alert>
    );
  }

  return (
    <>
      { content }
      <p className='text-center pt-4'>
        { (!isLoading && hasError) && (
          <Button variant="light" size="sm" onClick={props.prev}>
            Back
          </Button>
        ) }
      </p>
    </>
  );
};
