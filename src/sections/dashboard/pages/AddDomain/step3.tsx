import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useFetch from "util/fetch";

type Props = {
  domain: string;
  next: () => void;
  prev: () => void;
};

export default (props: Props) => {
  const [retry, setRetry] = useState<number>(0);
  const [isLoading, , hasError] = useFetch<any>(
    `/domains/verify/${props.domain}`,
    'POST',
  );

  const onRetry = () => {
    setRetry(retry + 1);
  };

  let content;

  if (isLoading) {
    content = (
      <h3 className="text-center text-muted my-5">
        <FontAwesomeIcon icon='spinner' pulse /> Verifiying...
      </h3>
    );
  } else if (hasError) {
    content = (
      <>
        <Alert variant='danger'>
          <p><b>Verification failed</b></p>
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
