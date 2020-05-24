import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import VerifyAccountStyled from './VerifyAccountStyled';

const VerifyAccount = ({
  getVerifyAccount,
  isVerified,
}) => {
  const { token } = useParams();
  useEffect(() => {
    document.title = 'M8S - Vérification';
    getVerifyAccount(token);
  }, []);

  if (isVerified === '') {
    return (
      <VerifyAccountStyled>
        <ClipLoader
          css="loading"
          size={100}
          color="orange"
          loading
        />
      </VerifyAccountStyled>
    );
  }
  if (isVerified) {
    return (
      <VerifyAccountStyled>
        <p>Votre compte a été validé avec succès.</p>
      </VerifyAccountStyled>
    );
  }

  return (
    <VerifyAccountStyled>
      <p>Lien de validation de compte expirée ou invalide.</p>
    </VerifyAccountStyled>
  );
};

VerifyAccount.propTypes = {
  getVerifyAccount: PropTypes.func.isRequired,
  isVerified: PropTypes.node.isRequired,
};

export default VerifyAccount;
