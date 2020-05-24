import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import EditProfilStyled from './EditProfilStyled';
import Field from './Field';

const EditProfil = ({
  handleEditProfil,
  email,
  password,
  username,
  firstname,
  lastname,
  changeField,
  isLoading,
}) => {
  useEffect(() => {
    document.title = 'Modifier mon profil';
  }, []);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleEditProfil();
  };
  return (
    <EditProfilStyled>
      <h1>Modifier mon profil</h1>
      <form className="login-form-element" onSubmit={handleSubmit}>
        <Field
          name="username"
          placeholder="Pseudo"
          onChange={changeField}
          value={username}
          defaultValue="ffffff"
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
          placeholder="Nouvelle adresse email"
          onChange={changeField}
          value={email}
        />
        <Field
          name="password"
          type="password"
          placeholder="Nouveau mot de passe"
          onChange={changeField}
          value={password}
        />
        <button
          type="submit"
          className="login-form-button"
        >
          Valider
        </button>
        {isLoading && (
          <p>Modification en cours. Veuillez patientez...</p>
        )}
      </form>
    </EditProfilStyled>
  );
};

EditProfil.propTypes = {
  handleEditProfil: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
};

export default EditProfil;
