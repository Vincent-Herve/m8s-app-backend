import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ClipLoader from 'react-spinners/ClipLoader';

import Field from './Field';

import SigninStyled from './SigninStyled';

const Signin = ({
  handleSignin,
  email,
  password,
  isLoading,
  changeField,
  messageError,
  setMessageError,
}) => {
  useEffect(() => {
    document.title = 'Se connecter';
  }, []);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (email !== '' && password !== '') {
      setMessageError('');
      return handleSignin();
    }
    setMessageError('Veuillez remplir tout les champs.');
  };

  return (
    <SigninStyled>
      <section className="signin">

        <h1>Connexion</h1>
        <form className="login-form-element" onSubmit={handleSubmit}>
          <Field
            name="email"
            placeholder="Adresse Email"
            onChange={changeField}
            value={email}
          />
          <Field
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={changeField}
            value={password}
          />
          <button
            type="submit"
            className="login-form-button"
          >
            Valider
          </button>
        </form>
        <p className="error">{messageError}</p>
        <div>
          <ClipLoader
            css="loading"
            size={100}
            color="orange"
            loading={isLoading}
          />
        </div>
        <div>
          <button type="button" className="loginBtn loginBtn--facebook">
            <a href="http://localhost:3000/auth/facebook">Login Facebook</a>
          </button>
        </div>
        <div className="contain-links">
          <Link className="links" to="/forgotten">Mot de passe oublié</Link>
        </div>
      </section>
    </SigninStyled>
  );
};

Signin.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleSignin: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  messageError: PropTypes.string.isRequired,
  setMessageError: PropTypes.func.isRequired,
};

export default Signin;
