/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getUrlByActivityTitle } from 'src/selectors/Activities';
import ActivityStyled from './ActivityStyled';

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
    // eslint-disable-next-line comma-dangle
  }
) => (
  <ActivityStyled>
    <div className={users.length >= free_place ? 'content-closed' : 'content'}>
      <h2 className="content-title">{title}</h2>
      <h3>Membres inscrit a l'activité :</h3>
      <div className="content-user">
        {users.map((user) => (
          <p key={user.username} className="content-name">{user.username}</p>
        ))}
      </div>
      {tags.map((tag) => (
        <p key={tag.name} className="content-tag">{tag.name}</p>
      ))}
      <p key={description} className="content-description"><span className="underline">Description</span>: {description}</p>
      <p key={free_place} className="content-text">{users.length}/{free_place}</p>
      <p key={location} className="content-text"><span className="underline">Lieu</span>: {location}</p>
      <p key={date} className="content-text"><span className="underline">Date</span>: {date}</p>
      <p key={hour} className="content-text"><span className="underline">Heure</span>: {hour}</p>
      <div className="content-link">
        <Link className="content-view-link" to={getUrlByActivityTitle(title)}>Voir l'activité</Link>
      </div>
      <Link className="register" to="/signin">
        Se connecter pour y participer
      </Link>
    </div>
  </ActivityStyled>
);

Activity.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
  free_place: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.node.isRequired,
  hour: PropTypes.node.isRequired,
};

export default Activity;
