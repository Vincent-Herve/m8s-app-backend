import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import HomeStyled from './HomeStyled';

const Home = ({ userProfil, isLogged, isLoading }) => {

  if (isLoading) {
    return (<div className="style-loading"><p>Veuillez patienter</p></div>);
  }

  return (
    <HomeStyled>
      <div className="contain">
        <h1>M8S</h1>
        {!isLogged && (
          <>
            <section>
              <h2>Welcome !</h2>
              <p>Du sport, de l'énergie à revendre, un esprit d'équipe et de compétition,
                vous êtes au bon endroit !
              </p>
            </section>
            <Link className="square_btn" to="/activity">N'attendez plus !</Link>
          </>
        )}
        {isLogged && (
          <article>
            <h2>Welcome {userProfil.username}</h2>
            <p>C'est parti pour un peu de sport !!</p>
            <Link className="square_btn" to="/create">Crée ta propre activité !</Link>
          </article>
        )}
      </div>
    </HomeStyled>
  );
};

Home.propTypes = {
  userProfil: PropTypes.object.isRequired,
  isLogged: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Home;
