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
) => {
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
      </div>
    </ActivityStyled>
  );
};

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
