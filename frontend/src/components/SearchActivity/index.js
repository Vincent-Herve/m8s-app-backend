import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import ClipLoader from 'react-spinners/ClipLoader';
import Activity from './Activity';

import Field from './Field';

import SearchActivityStyled from './SearchActivityStyled';

const SearchActivity = ({
  handleSearchActivity,
  location,
  isLoading,
  tagId,
  changeField,
  changeTag,
  activities,
  userProfilId,
  isLogged,
  registerActivity,
  leftActivity,
}) => {

  const [message, setMessage] = useState(`${activities.length} activité(s) disponible(s)`);

  useEffect(() => {
    setMessage(`${activities.length} activité(s) disponible(s)`);
  }, [activities]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSearchActivity();
  };

  const handleChangeTag = (evt) => {
    changeTag(evt.target.value);
  };

  const viewActivities = (activities.length ? true : false)

  const viewActivitiesOn = (viewActivities && !isLoading ? true : false);
  return (
    <SearchActivityStyled>
      <section>

        <h1>Rechercher une activité</h1>
        <form className="login-form-element" onSubmit={handleSubmit}>
          <Field
            name="location"
            placeholder="Lieu"
            onChange={changeField}
            value={location}
          />
          <p>Tag :</p>
          <select onChange={handleChangeTag} name="tagId" id="chooseTag">
            {tagId.map((tag) => (
              <option key={tag.id} value={tag.name}>{tag.name}</option>
            ))}
          </select>
          <div>
            <button
              type="submit"
              className="login-form-button"
            >
              Valider
            </button>
          </div>
        </form>
        <ClipLoader
          css="loading"
          size={100}
          color="orange"
          loading={isLoading}
        />
        {viewActivitiesOn && (
          <div className="contain">
            <h1>{message}</h1>
            <div className="cards">
              {activities.map((activity) => <Activity key={activity.id} {...activity} userProfilId={userProfilId} leftActivity={leftActivity} isLogged={isLogged} registerActivity={registerActivity} />)}
            </div>
          </div>
        )}
      </section>
    </SearchActivityStyled>
  );
};

/*
SearchActivity.propTypes = {
  handleSearchActivity: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
  tagId: PropTypes.number.isRequired,
  changeField: PropTypes.func.isRequired,
  changeTag: PropTypes.func.isRequired,
 userProfilid: PropTypes.number.isRequired,
 isLogged: PropTypes.bool.isRequired,
 registrerActivity: PropTypes.func.isRequired,
 leftActivity: PropTypes.func.isRequired,
};*/

export default SearchActivity;
