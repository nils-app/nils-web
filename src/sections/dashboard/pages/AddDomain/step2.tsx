import React from "react";
import { Button } from "react-bootstrap";

type Props = {
  domain: string;
  next: () => void;
  prev: () => void;
};

export default (props: Props) => {
  const verificationToken = "abcssdfasf2fqewfq34tqgegsdafa34qg3erw";

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
      <pre className="code">
        <code>{verificationToken}</code>
      </pre>
      <p className="text-muted">
        <small>* We'll try both http and https when verifying the domain, and it will work if either works.</small>
      </p>

      <hr />

      <h4>DNS Verification</h4>
      <p>Add the following TXT record in your DNS provider</p>
      <pre className="code">
        <code>
          Name: nils <br />
          Content: {verificationToken}
        </code>
      </pre>
      <p>
        If your DNS provider only gives you one field to add TXT records, add it
        like this:
      </p>
      <pre className="code">
        <code>nils={verificationToken}</code>
      </pre>

      <hr />

      <p className="text-center">
        <Button variant="light" size="sm" onClick={props.prev} className='mr-4'>
          Back
        </Button>
        <Button variant="secondary" size="sm" onClick={props.next}>
          Verify
        </Button>
      </p>
    </>
  );
};
