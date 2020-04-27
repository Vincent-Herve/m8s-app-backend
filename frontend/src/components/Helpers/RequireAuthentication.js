import React from 'react';
import { useHistory } from 'react-router-dom';

export default function (ChildComponent, isLogged) {
  const RequireAuthentication = () => {
    const history = useHistory();

    if (!isLogged) {
      history.push('/');
    }

    return (
      <ChildComponent />
    );
  };

  return RequireAuthentication;
}
