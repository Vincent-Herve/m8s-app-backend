import React from 'react';
import PropTypes from 'prop-types';

const Unsubscribe = ({ handleUnsubscribe }) => {
  const buttonHandleClick = () => {
    handleUnsubscribe();
  };
  return (
    <div style={{ padding: '10em' }}>
      <p>Etes-vous sur de vouloir vous désinscrire, votre profil sera supprimé !</p>
      <button type="button" onClick={buttonHandleClick}>Se désinscrire</button>
    </div>
  );
};

Unsubscribe.propTypes = {
  handleUnsubscribe: PropTypes.func.isRequired,
};
export default Unsubscribe;
