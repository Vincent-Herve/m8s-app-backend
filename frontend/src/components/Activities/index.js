import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';
import Activity from './Activity';
import ActivitiesStyled from './ActivitiesStyled';
import Field from './Field';

const Icon = () => (
  <IoMdAdd color="green" size="1.5em" />
);

const Activities = ({
  activities,
  userProfilId,
  isLogged,
  registerActivity, leftActivity, fetchActivities, tags,
  location,
  tagName,
  changeField,
  changeTag,
}) => {
  const [stateActivities, setStateActivities] = useState('');
  const [message, setMessage] = useState('');
  const [activitiesOrNot, setActivitiesOrNot] = useState('');

  const showActivity = [];
  const viewActivity = (!!stateActivities.length);

  useEffect(() => {
    activities.forEach((activity) => {
      if (tagName !== '') {
        if (activity.tags[0].name.toLowerCase().indexOf(tagName.toLowerCase()) !== -1) {
          showActivity.push(activity);
        }
      }
      if (location !== '') {
        if (activity.location.toLowerCase().indexOf(location.toLowerCase()) !== -1
          && !showActivity.includes(activity)) {
          showActivity.push(activity);
        }
      }
    });
    setMessage(`${showActivity.length} activité(s) disponible(s)`);
    setStateActivities(showActivity);

    if (!showActivity.length) {
      setActivitiesOrNot('Aucune activité trouvé.');
    }
    else {
      setActivitiesOrNot('');
    }
  }, [tagName, location]);

  useEffect(() => {
    document.title = 'Activités';
    setActivitiesOrNot('');
  }, []);

  const handleChangeTag = (evt) => {
    changeTag(evt.target.value);
  };
  return (
    <ActivitiesStyled>
      <h1>Faites votre recherche</h1>
      <form className="login-form-element">
        <Field
          name="location"
          placeholder="Lieu"
          onChange={changeField}
          value={location}
        />
        <p>Tag :</p>
        <select onChange={handleChangeTag} name="tagList" id="chooseTag">
          {tags.map((tag) => (
            <option key={tag.id} value={tag.name}>{tag.name}</option>
          ))}
        </select>
      </form>
      {isLogged && (
        <div className="div-link">
          <Link to="/create" className="link-activity">Créer votre activité <Icon /></Link>
        </div>
      )}
      <p className="activitiesOrNot">{activitiesOrNot}</p>
      {viewActivity && (
      <div className="contain">
        <p className="message">{message}</p>
        <div className="cards">
          {stateActivities.map((activity) => (
            <Activity
              key={activity.id}
              tagList={tags}
              {...activity}
              fetchActivities={fetchActivities}
              userProfilId={userProfilId}
              leftActivity={leftActivity}
              isLogged={isLogged}
              registerActivity={registerActivity}
            />
          ))}
        </div>
      </div>
      )}
    </ActivitiesStyled>
  );
};

Activities.propTypes = {
  leftActivity: PropTypes.func.isRequired,
  registerActivity: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  userProfilId: PropTypes.node.isRequired,
  fetchActivities: PropTypes.func.isRequired,
  tags: PropTypes.array.isRequired,
  location: PropTypes.string.isRequired,
  tagName: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  changeTag: PropTypes.func.isRequired,
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Activities;
