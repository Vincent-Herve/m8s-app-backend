/* eslint-disable no-alert */
/* eslint-disable no-console */
import React, { useState } from 'react';
import axios from 'axios';
import ContactStyled from './ContactStyled';
import Logo from './Logo.svg';

const Contact = () => {
  // state controlled field
  const [valueForm, setValueForm] = useState({ name: '', email: '', message: '' });

  const handleSubmitForm = (evt) => {
    evt.preventDefault();

    axios.post('http://localhost:3000/contact', {
      name: valueForm.name,
      email: valueForm.email,
      message: valueForm.message,
    })
      .then((response) => {
        if (response.status === 200) {
          alert('Message Sent.');
        }
        else {
          alert('Message failed to send.');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onNameChange = (evt) => {
    setValueForm({ ...valueForm, name: evt.target.value });
  };

  const onEmailChange = (evt) => {
    setValueForm({ ...valueForm, email: evt.target.value });
  };

  const onMessageChange = (evt) => {
    setValueForm({ ...valueForm, message: evt.target.value });
  };

  return (
    <ContactStyled>
      <main className="main">
        <h1>Contactez-nous !</h1>
        <p>Une idée, une suggestion, un probléme, n'hésitez pas à nous contacter,
          nous vous répondrons dans les plus brefs délais !
        </p>
        <form className="form" onSubmit={handleSubmitForm}>
          <p>Pseudo : </p>
          <input type="text" value={valueForm.name} onChange={onNameChange} placeholder="Pseudo" />
          <p>Email :</p>
          <input type="text" value={valueForm.email} onChange={onEmailChange} placeholder="Email" />
          <p>Description :</p>
          <textarea row="10" cols="40" value={valueForm.message} onChange={onMessageChange} placeholder="Décrivez votre demande" />
        </form>
        <button className="input" type="submit">Envoyer</button>
        <img src={Logo} alt="logo" className="logo" />
      </main>
    </ContactStyled>
  );
};

export default Contact;
