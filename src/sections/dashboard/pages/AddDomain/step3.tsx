import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  domain: string;
  next: () => void;
  prev: () => void;
};

export default (props: Props) => {
  return (
    <>
      <h3 className="text-center text-muted my-5">
        <FontAwesomeIcon icon='spinner' pulse /> Verifiying...
      </h3>
      <p className='text-center pt-4'>
        <Button variant="light" size="sm" onClick={props.prev}>
          Back
        </Button>
      </p>
    </>
  );
};
