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
    content = (
      <>
        <Alert variant='warning'>
          <h4>Verification failed</h4>
          <p>{ hasError.message }</p>
          <p>Please double check your verification method and try again.</p>
          <p>If using DNS verification changes may take up to 24h to propagate.</p>
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
