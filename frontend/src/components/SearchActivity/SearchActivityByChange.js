import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Activity from './Activity';

import Field from './Field';

import SearchActivityStyled from './SearchActivityStyled';

const SearchActivity = ({
  location,
  tagName,
  tagList,
  changeField,
  changeTag,
  activities,
}) => {
  const [stateActivities, setStateActivities] = useState('');
  const [message, setMessage] = useState('');

  const showActivity = [];
  const viewActivity = (stateActivities.length ? true : false);

  useEffect(() => {
    activities.forEach((activity) => {
      if (tagName !== '') {
        if (activity.tags[0].name.toLowerCase().indexOf(tagName.toLowerCase()) !== -1) {
          showActivity.push(activity);
        }
      }
      if (location !== '') {
        if (activity.location.toLowerCase().indexOf(location.toLowerCase()) !== -1 && !showActivity.includes(activity)) {
          showActivity.push(activity);
        }
      }
    });
    setMessage(`${showActivity.length} activité(s) disponible(s)`);
    setStateActivities(showActivity);
  }, [tagName, location]);

  const handleChangeTag = (evt) => {
    changeTag(evt.target.value);
  };

  return (
    <SearchActivityStyled>
      <section>
        <h1>Rechercher une activité</h1>
        <form className="login-form-element">
          <Field
            name="location"
            placeholder="Lieu"
            onChange={changeField}
            value={location}
          />
          <p>Tag :</p>
          <select onChange={handleChangeTag} name="tagList" id="chooseTag">
            {tagList.map((tag) => (
              <option key={tag.id} value={tag.name}>{tag.name}</option>
            ))}
          </select>
        </form>
        {viewActivity && (
          <div className="contain">
            <h1>{message}</h1>
            <div className="cards">
              {stateActivities.map((activity) => <Activity key={activity.id} {...activity} />)}
            </div>
          </div>
        )}
      </section>
    </SearchActivityStyled>
  );
};

SearchActivity.propTypes = {
  location: PropTypes.string.isRequired,
  tagList: PropTypes.array.isRequired,
  changeField: PropTypes.func.isRequired,
  changeTag: PropTypes.func.isRequired,
  activities: PropTypes.array.isRequired,
  tagName: PropTypes.string.isRequired,
};

export default SearchActivity;
