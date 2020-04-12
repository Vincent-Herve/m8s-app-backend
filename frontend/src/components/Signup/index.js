import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ClipLoader from 'react-spinners/ClipLoader';
import SignupStyled from './SignupStyled';
import Field from './Field';

const Signup = ({
  handleSignup,
  username,
  firstname,
  lastname,
  email,
  password,
  passwordConfirm,
  isLoading,
  changeField,
  messageError,
  setMessageError,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (username === '' || firstname === '' || lastname === '' || email === '' || password === '' || passwordConfirm === '') {
      setMessageError('Veuillez remplir tout les champs');
    } else if (password !== passwordConfirm) {
      setMessageError('Erreur sur le mot de passe');
    } else {
      handleSignup();
    }
  };

  return (
    <SignupStyled>
      <section className="signup">

        <h1>Inscription</h1>

        <form className="login-form-element" onSubmit={handleSubmit}>
          <Field
            name="username"
            placeholder="Pseudo"
            onChange={changeField}
            value={username}
          />
          <Field
            name="firstname"
            placeholder="Prénom"
            onChange={changeField}
            value={firstname}
          />
          <Field
            name="lastname"
            placeholder="Nom"
            onChange={changeField}
            value={lastname}
          />
          <Field
            name="email"
            placeholder="Adresse Email"
            onChange={changeField}
            value={email}
          />
          <Field
            name="password"
            placeholder="Password"
            type="password"
            onChange={changeField}
            value={password}
          />
          <Field
            name="passwordConfirm"
            placeholder="Comfirmer password"
            type="password"
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
          color="aqua"
          loading={isLoading}
        />
        <div className="contain-links">
          <Link className="links" to="/signin"> Déjà un compte ? Se connecter</Link>
        </div>
      </section>

    </SignupStyled>

  );
};
Signup.propTypes = {
  username: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirm: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleSignup: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  messageError: PropTypes.string.isRequired,
  setMessageError: PropTypes.func.isRequired,
};

export default Signup;
