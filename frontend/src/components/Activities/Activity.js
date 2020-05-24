/* eslint-disable camelcase */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getUrlByActivityTitle } from 'src/selectors/Activities';
import { IoIosPeople, IoMdCreate } from 'react-icons/io';
import ActivityStyled from './ActivityStyled';

const Icon = () => (
  <IoIosPeople size="1.5em" className="author-icon" />
);

const IconEdit = () => (
  <IoMdCreate size="1.5em" color="blue" />
);

const Activity = (
  {
    id,
    title,
    tags,
    users,
    description,
    // eslint-disable-next-line camelcase
    free_place,
    location,
    date,
    hour,
    user_id,
    userProfilId,
    isLogged,
    registerActivity,
    leftActivity,
    tagList,
    // eslint-disable-next-line comma-dangle
  }
) => {
  // state message register or left activity
  const [message, setMessage] = useState('');

  // eslint-disable-next-line no-unneeded-ternary
  const authorActivity = (user_id === userProfilId ? true : false);

  const memberActivity = users.filter((user) => user.id === userProfilId);
  const memberActivityReserved = (!!(memberActivity.length && isLogged && !authorActivity));
  const memberActivityNotReserved = (!!(isLogged
    && (memberActivityReserved === false) && !authorActivity));

  const handleRegisterClick = () => {
    if (users.length >= free_place) {
      // eslint-disable-next-line no-alert
      alert('Il n\'y a plus de place disponible pour cette activité');
    }
    else {
      registerActivity(id, userProfilId);
      setMessage('Vous êtes inscrit sur cette activité');
    }
  };

  const handleDeleteClick = () => {
    leftActivity(id, userProfilId);
    setMessage('Vous êtes désinscrit de cette activité');
  };

  const regex = /(\w+)-(\w+)-(\w+)/;

  return (
    <ActivityStyled>
      <div className={users.length >= free_place ? 'content-closed' : 'content'}>
        <h2 className="content-title">{title}</h2>
        {tags.map((tag) => (
          <p key={tag.name} className="content-tag">{tag.name}</p>
        ))}
        <p key={description} className="content-description"><span className="bold">Description</span>: {description}</p>
        <p key={free_place} className="content-text"><span className="bold">Membre(s) inscrit(s) / Places max</span>: {users.length} / {free_place}</p>
        <p key={location} className="content-text"><span className="bold">Lieu</span>: {location}</p>
        <p key={date} className="content-text"><span className="bold">Date</span>: {date.replace(regex, '$3-$2-$1')}</p>
        <p key={hour} className="content-text"><span className="bold">Heure</span>: {hour}</p>
        <div className="content-link">
          <Link className="content-view-link" to={getUrlByActivityTitle(title)}>Voir l'activité</Link>
        </div>
        {!isLogged && (
          <div className="div-link">
            <Link className="register" to="/signin">
              Se connecter pour y participer
            </Link>
          </div>
        )}
        {memberActivityNotReserved && (
          <div className="div-link">
            <button type="button" className="register" onClick={handleRegisterClick}>
              Y participer !
            </button>
          </div>
        )}
        {memberActivityReserved && (
          <div className="div-link">
            <button type="button" className="delete" onClick={handleDeleteClick}>Se désinscrire</button>
          </div>
        )}
        {authorActivity && (
          <>
            <Icon />
            <Link
              className="link-edit"
              to={
                {
                  pathname: '/editactivity',
                  state: {
                    id,
                    title,
                    description,
                    free_place,
                    current_place: users.length,
                    location,
                    date,
                    hour,
                    tagList,
                    currentTag: tags[0].id,
                  },
                }
              }
            >Modifié l'activité <IconEdit />
            </Link>
          </>
        )}
        <p className="message">{message}</p>
      </div>
    </ActivityStyled>
  );
};

Activity.propTypes = {
  id: PropTypes.number.isRequired,
  leftActivity: PropTypes.func.isRequired,
  registerActivity: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
  free_place: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.node.isRequired,
  hour: PropTypes.node.isRequired,
  user_id: PropTypes.number.isRequired,
  userProfilId: PropTypes.node.isRequired,
  tagList: PropTypes.array.isRequired,
};

export default Activity;
