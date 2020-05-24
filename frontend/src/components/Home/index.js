import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import HomeStyled from './HomeStyled';

const Home = ({ userProfil, isLogged, isLoading }) => {
  useEffect(() => {
    document.title = 'Accueil - M8S';
  }, []);

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
              <p>Vous recherchez une activité sportive près de chez vous ?</p>
              <p>De l'énergie à revendre, un esprit d'équipe, vous êtes au bon endroit !</p>
            </section>
            <div className="div-link">
              <Link className="square_btn" to="/activity">N'attendez plus !</Link>
            </div>
          </>
        )}
        {isLogged && (
          <>
            <section>
              <h2>Welcome {userProfil.username}</h2>
              <p>C'est parti pour un peu de sport !!</p>
            </section>
            <Link className="square_btn" to="/create">Crée ta propre activité !</Link>
          </>
        )}
      </div>
      <CookieConsent>
        Ce site web utilise les cookies pour améliorer votre expérience utilisateur.
      </CookieConsent>
    </HomeStyled>
  );
};

Home.propTypes = {
  userProfil: PropTypes.object.isRequired,
  isLogged: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Home;
