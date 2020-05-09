import React from 'react';
import AboutStyled from './AboutStyled';
// import PropTypes from 'prop-types';

const About = () => (
  <AboutStyled>
    <h1>A propos</h1>
    <h2>Qu'est ce que M8S ?</h2>
    <p>
      M8S est une application destiné à toutes les personnes motivées pour faire du sport.
      Vous cherchez une activité sportive près de chez vous, par exemple un futsal ou un tennis,
      pourquoi pas un paintball ? Vous êtes au bonne endroit.
    </p>
    <h2>Comment ça fonctionne ?</h2>
    <p>
      Nous utilisons un système d'activité pour regrouper les personnes qui veulent faire
      du sport ensemble. Il est possible de visualiser toute les activités disponibles sans
      être connecté. Pour profiter pleinement des fonctionnalités de l'application,
      vous aurez besoin de créer un compte.<br />
      Une fois connecté, vous pouvez rejoindre l'activité qui vous plaît en y participant mais
      aussi vous désinscrire de cette dernière. <br />
      Vous pouvez aussi créer votre propre activité en précisant le titre de votre activité,
      sa description, le nombre de place disponible, le lieu, les horaires ainsi qu'un tag
      correspondant au sport que vous avez choisi.
      Une activité terminée depuis vingt quatre heures sera automatiquement supprimer.
    </p>
    <h3>Maintenant c'est à vous de jouer !</h3>
  </AboutStyled>
);

// About.propTypes = {

// };

export default About;
