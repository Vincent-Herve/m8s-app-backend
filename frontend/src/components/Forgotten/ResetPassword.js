import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import ResetPasswordStyled from './ResetPasswordStyled';
import Field from './Field';

const ResetPassword = ({
  getResetPassword,
  reset,
  changeField,
  messageError,
  setMessageError,
  password,
  passwordConfirm,
  isLoading,
  handleReset,
}) => {
  const { token } = useParams();
  useEffect(() => {
    getResetPassword(token);
  }, []);

  useEffect(() => {
    document.title = 'Réinitialisation du mot de passe';
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (password !== '' && passwordConfirm !== '' && password === passwordConfirm) {
      setMessageError('');
      return handleReset(token);
    }
    return setMessageError('Champs vide ou mot de passe non identique.');
  };

  if (reset === '') {
    return (
      <ResetPasswordStyled>
        <ClipLoader
          css="loading"
          size={100}
          color="orange"
          loading
        />
      </ResetPasswordStyled>
    );
  }
  if (reset) {
    return (
      <ResetPasswordStyled>
        <h1>Réinitialiser votre mot de passe </h1>
        <form className="login-form-element" onSubmit={handleSubmit}>
          <Field
            name="password"
            type="password"
            placeholder="Nouveau mot de passe"
            onChange={changeField}
            value={password}
          />
          <Field
            name="passwordConfirm"
            type="password"
            placeholder="Confirmation mot de passe"
            onChange={changeField}
            value={passwordConfirm}
          />
          <button
            type="submit"
            className="login-form-button"
          >
            Valider
          </button>
        </form>
        <p className="error">{messageError}</p>
        <ClipLoader
          css="loading"
          size={100}
          color="orange"
          loading={isLoading}
        />
        {isLoading && <p>Mot de passe réinitialisé avec succès... Vous allez être redirigé</p>}
      </ResetPasswordStyled>
    );
  }

  return (
    <ResetPasswordStyled>
      <p>Demande de réinitialisation de mot de passe expirée ou invalide.</p>
    </ResetPasswordStyled>
  );
};

ResetPassword.propTypes = {
  getResetPassword: PropTypes.func.isRequired,
  reset: PropTypes.node.isRequired,
  changeField: PropTypes.func.isRequired,
  setMessageError: PropTypes.func.isRequired,
  messageError: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirm: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleReset: PropTypes.func.isRequired,
};

export default ResetPassword;
