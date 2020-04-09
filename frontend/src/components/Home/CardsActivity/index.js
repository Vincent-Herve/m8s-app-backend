import React from 'react';
import CardsActivityStyled from './CardsActivityStyled';
import Activity from '../../Activities/Activity';

const CardsActivity = ({ activity }) => {
  const HomeActivities = [];
  for (let idx = 0; idx <= 2; ++idx) {
    HomeActivities.push(activity[idx]);
  }
  return (
    <CardsActivityStyled>
      <h1>Voici nos activités les plus récentes</h1>
      <div className="flex-card">
        {HomeActivities.map((HomeActivity) => (
          <Activity key={HomeActivity.id} {...HomeActivity} />
        ))}
      </div>
    </CardsActivityStyled>
  );
};

export default CardsActivity;
