import React from 'react';
import PropTypes from 'prop-types';
import CardsActivityStyled from './CardsActivityStyled';
import Activity from './Activity';

const CardsActivity = ({ activity, isLoading }) => {
  const HomeActivities = [];
  // eslint-disable-next-line no-plusplus
  for (let idx = 0; idx <= 2; ++idx) {
    HomeActivities.push(activity[idx]);
  }

  if (isLoading) {
    return (<div className="style-loading"><p>Veuillez patienter</p></div>);
  }

  return (
    <CardsActivityStyled>
      <h1>Voici nos activités les plus récentes</h1>
      <div className="cards">
        {HomeActivities.map((HomeActivity) => (
          <Activity key={HomeActivity.id} {...HomeActivity} />
        ))}
      </div>
    </CardsActivityStyled>
  );
};

CardsActivity.propTypes = {
  activity: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default CardsActivity;
