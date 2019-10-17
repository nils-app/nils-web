import React from "react";
import Helmet from "react-helmet";
import classNames from 'classnames';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const providers = ['Github', 'Google'];

export default () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <h2 className='mb-5'>Sign in</h2>
      { providers.map((provider) => {
        const providerName: any = provider.toLowerCase();
        return (
          <a
            key={ provider }
            href={ `http://nils.local/auth/${providerName}?returnTo=http://localhost:3000/login` }
            className={ classNames('btn', `btn-${providerName}`, 'mb-4', 'mx-2') }
          >
            <FontAwesomeIcon icon={ ['fab', providerName] } />
            Sign in with { provider }
          </a>
        );
      }) }
      <hr className='mt-5 mb-4' />
      <p className='text-muted'>
        <small>
        We'll create an account for you if it's your first time signing in.
        </small>
      </p>
    </>
  );
};
