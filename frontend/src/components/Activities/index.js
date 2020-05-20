import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';
import Activity from './Activity';
import ActivitiesStyled from './ActivitiesStyled';

const Icon = () => (
  <IoMdAdd color="green" size="1.5em" />
);

const Activities = ({
  activities, userProfilId, isLogged, registerActivity, leftActivity, fetchActivities, tags,
}) => {
  useEffect(() => {
    document.title = 'Activités';
  }, []);
  return (
    <ActivitiesStyled>
      <h1>Les activités disponibles</h1>
      <div className="contain">
        {isLogged && (
          <div className="div-link">
            <Link to="/create" className="link-activity">Créer votre activité <Icon /></Link>
          </div>
        )}
        <div className="cards">
          {activities.map((activity) => (
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
        {isLogged && (
          <div className="div-link">
            <Link to="/create" className="link-activity">Créer votre activité <Icon /></Link>
          </div>
        )}
      </div>
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
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Activities;
