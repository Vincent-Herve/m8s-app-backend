import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import UnsubscribeStyled from './UnsubscribeStyled';

const Unsubscribe = ({ handleUnsubscribe }) => {
  useEffect(() => {
    document.title = 'Me désinscrire';
  }, []);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const buttonHandleClick = () => {
    setLoading(true);
    setMessage('Désinscription en cours ...');
    setTimeout(() => {
      setLoading(false);
      handleUnsubscribe();
    }, 1000);
  };
  return (
    <UnsubscribeStyled>
      <p>Etes-vous sur de vouloir vous désinscrire, votre profil sera supprimé !</p>
      <button type="button" onClick={buttonHandleClick}>Se désinscrire</button>
      {loading && <p style={{ fontWeight: 'bold' }}>{message}</p>}
    </UnsubscribeStyled>
  );
};

Unsubscribe.propTypes = {
  handleUnsubscribe: PropTypes.func.isRequired,
};
export default Unsubscribe;
