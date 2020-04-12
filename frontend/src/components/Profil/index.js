/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IoIosPeople } from 'react-icons/io';
import ProfilStyled from './ProfilStyled';

const Icon = () => (
  <IoIosPeople className="author-icon" />
);

const Profil = ({ userProfil, handleSignout, activities }) => {
  const Signout = () => {
    handleSignout();
  };

  const filteredActivities = [];

  for (let activityUsers of activities) {
    for (let activityUser of activityUsers.users) {
      if (activityUser.id === userProfil.id) {
        filteredActivities.push(activityUsers);
      }
    }
  }

  const [tab, setTab] = useState('infoUser');
  const generateClickHandler = (newTab) => () => {
    setTab(newTab);
  };

  return (
    <ProfilStyled>
      <h1>Mon profil</h1>
      <div>
        <div className="button-tab">
          <button type="button" onClick={generateClickHandler('infoUser')}>Informations personnelles</button>
          <button type="button" onClick={generateClickHandler('currentActivity')}>Mes activités en cours</button>
        </div>
        {tab === 'infoUser' && (
          <section>
            <h2>Informations personnelles</h2>
            <ul className="ul">
              <li>Pseudo: {userProfil.username}</li>
              <li>Prénom: {userProfil.firstname}</li>
              <li>Nom: {userProfil.lastname}</li>
              <li>Email: {userProfil.email}</li>
            </ul>
          </section>
        )}
        {tab === 'currentActivity' && (
          <section className="section-activity">
            <h2>Mes activités en cours</h2>
            <div className="contain-card">
              {filteredActivities.map((activity) => {
                const authorActivity = (activity.user_id === userProfil.id ? true : false);
                return (
                  <article className="article" key={activity.id}>
                    <h2 key={activity.title} className="content-title">{activity.title}</h2>
                    <p key={activity.description} className="content-description">{activity.description}</p>
                    <p key={activity.free_place} className="content-text">{activity.users.length}/{activity.free_place}</p>
                    <p key={activity.location} className="content-text">{activity.location}</p>
                    <p key={activity.date} className="content-text">{activity.date}</p>
                    <p key={activity.hour} className="content-text">{activity.hour}</p>
                    {authorActivity && (
                      <>
                        <Icon />
                      </>
                    )}
                  </article>
                )
              })}
            </div>
          </section>
        )}
      </div>
      <Link className="button" to="/editprofil">Modifier mon profil</Link>
      <Link className="links" onClick={Signout} to="/disconnect">Se déconnecter</Link>
      <Link className="links" to="/unsubscribe">Se désinscrire</Link>
    </ProfilStyled>
  );
};

Profil.propTypes = {
  userProfil: PropTypes.object.isRequired,
  handleSignout: PropTypes.func.isRequired,
  activities: PropTypes.array.isRequired,
};

export default Profil;
