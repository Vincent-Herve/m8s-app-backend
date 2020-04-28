import React from 'react';
import { useHistory } from 'react-router-dom';

export default function (ChildComponent, isLogged, isLoading = false) {
  const RequireAuthentication = () => {
    const history = useHistory();

    if (!isLogged) {
      history.push('/');
    }

    if (isLoading) {
      return (<div className="style-loading"><p>Veuillez patienter</p></div>);
    }

    return (
      <ChildComponent />
    );
  };

  return RequireAuthentication;
}
