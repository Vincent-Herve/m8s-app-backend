/* eslint-disable no-alert */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoIosPeople, IoMdCreate } from 'react-icons/io';
import DetailActivityStyled from './DetailActivityStyled';

const Icon = () => (
  <IoIosPeople size="2em" className="author-icon" />
);

const IconEdit = () => (
  <IoMdCreate size="1.5em" color="blue" />
);

const DetailActivity = (
  {
    activity,
    isLogged,
    userProfilId,
    registerActivity,
    leftActivity,
    tagList,
  },
) => {
  const [message, setMessage] = useState('');

  const memberActivity = activity.users.filter((user) => user.id === userProfilId);
  const memberActivityReserved = (memberActivity.length && isLogged ? true : false);
  const memberActivityNotReserved = (isLogged && (memberActivityReserved === false) ? true : false);


  const handleRegisterClick = () => {
    if (activity.users.length >= activity.free_place) {
      alert('Il n\'y a plus de place disponible pour cette activité');
    }
    else {
      registerActivity(activity.id, userProfilId);
      setMessage('Vous êtes inscrit sur cette activité');
    }
  };

  const handleDeleteClick = () => {
    leftActivity(activity.id, userProfilId);
    setMessage('Vous êtes désinscrit de cette activité');
  };

  const authorActivity = (activity.user_id === userProfilId ? true : false);

  return (
    <DetailActivityStyled>
      <div className="content">
        <h2 className="content-title">{activity.title}</h2>
        <h3>Liste des membres inscrit a l'activité</h3>
        {activity.users.map((user) => (
          <p key={user.username} className="content-username">{user.username}</p>
        ))}
        {activity.tags.map((tag) => (
          <p key={tag.name} className="content-tag">{tag.name}</p>
        ))}
        <p key={activity.description} className="content-description"><span className="underline">Description</span>: {activity.description}</p>
        <p key={activity.free_place} className="content-free-place"><span className="underline">place libre</span>: {activity.free_place}</p>
        <p key={activity.location} className="content-lieu"><span className="underline">Lieu</span>: {activity.location}</p>
        <p key={activity.date} className="content-date"><span className="underline">Date</span>: {activity.date}</p>
        <p key={activity.hour} className="content-heure"><span className="underline">Heure</span>: {activity.hour}</p>

        {!isLogged && (
          <Link className="link" to="/signin">
            Se connecter pour y participer
          </Link>
        )}
        {memberActivityNotReserved && (
          <button type="button" className="register" onClick={handleRegisterClick}>
            Y participer !
          </button>
        )}
        {memberActivityReserved && (
          <button type="button" className="delete" onClick={handleDeleteClick}>Se désinscrire</button>
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
                    id: activity.id,
                    title: activity.title,
                    description: activity.description,
                    free_place: activity.free_place,
                    current_place: activity.users.length,
                    location: activity.location,
                    date: activity.date,
                    hour: activity.hour,
                    tagList,
                    currentTag: activity.tags[0].id
                  },
                }
              }
            >Modifié l'activité <IconEdit />
            </Link>
          </>
        )}
        <p>{message}</p>
      </div>
    </DetailActivityStyled>
  );
};

DetailActivity.propTypes = {
  activity: PropTypes.shape({
    user_id: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    users: PropTypes.array.isRequired,
    tags: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    free_place: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    date: PropTypes.node.isRequired,
    hour: PropTypes.node.isRequired,
  }).isRequired,
  leftActivity: PropTypes.func.isRequired,
  registerActivity: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  userProfilId: PropTypes.node.isRequired,
  tagList: PropTypes.node.isRequired,
};

// == Export
export default DetailActivity;
