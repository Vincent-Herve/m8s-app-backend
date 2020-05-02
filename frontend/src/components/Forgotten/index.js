/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import ForgottenStyled from './ForgottenStyled';


const Forgotten = () => {
  // state controlled field
  const [valueForm, setValueForm] = useState({ email: '' });

  const handleSubmitForm = (evt) => {
    evt.preventDefault();

    axios.post('http://localhost:3000/api/auth/recover', {
      email: valueForm.email,
    })
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          alert('Un mail vous a été envoyé pour réinitialiser votre mot de passe.');
        }
        else {
          alert('Cet email n\'existe pas');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onEmailChange = (evt) => {
    setValueForm({ email: evt.target.value });
  };

  return (
    <ForgottenStyled>
      <main className="main">
        <h1>Mot de passe oublié</h1>
        <p>Entrer votre adresse email pour récupérer votre mot de passe</p>
        <form className="form" onSubmit={handleSubmitForm}>
          <p>Email :</p>
          <input type="text" value={valueForm.email} onChange={onEmailChange} placeholder="Email" />
        </form>
        <button className="input" type="submit">Envoyer</button>
      </main>
    </ForgottenStyled>
  );
};

// Forgotten.propTypes = {

// };

export default Forgotten;
