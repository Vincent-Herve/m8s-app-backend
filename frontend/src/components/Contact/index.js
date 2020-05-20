/* eslint-disable no-alert */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactStyled from './ContactStyled';

const Contact = (props) => {
  useEffect(() => {
    document.title = 'Contact';
  }, []);
  // state controlled field
  const [valueForm, setValueForm] = useState({ name: '', email: '', message: '' });

  const handleSubmitForm = (evt) => {
    evt.preventDefault();

    axios.post('http://localhost:3000/api/contact', {
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

  const pseudo = 'Pseudo';
  const email = 'Email';
  const description = 'Description';

  return (
    <ContactStyled>
      <main className="main">
        <h1>Contactez-nous !</h1>
        <p>Une idée, une suggestion, un probléme, n'hésitez pas à nous contacter,
          nous vous répondrons dans les plus brefs délais !
        </p>
        <form className="form" onSubmit={handleSubmitForm}>
          <div>
            <label htmlFor="pseudo">{pseudo} :</label>
            <input type="text" id="pseudo" value={valueForm.name} onChange={onNameChange} placeholder={pseudo} />
          </div>
          <div>
            <label htmlFor="email">{email} :</label>
            <input type="text" id="email" value={valueForm.email} onChange={onEmailChange} placeholder={email} />
          </div>
          <label htmlFor="description">{description} :</label>
          <div>
            <textarea row="10" cols="40" id="description" value={valueForm.message} onChange={onMessageChange} placeholder={description} />
          </div>
          <div>
            <button className="input" type="submit">Envoyer</button>
          </div>
        </form>
      </main>
    </ContactStyled>
  );
};

export default Contact;
