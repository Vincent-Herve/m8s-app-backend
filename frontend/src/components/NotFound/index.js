import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
// import PropTypes from 'prop-types';

const NotFound = () => {
  useEffect(() => {
    document.title = 'Page non trouvée';
  }, []);
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>4<span>0</span>4</h1>
        </div>
        <p>
          Nous sommes désolés, mais la page demandée n'a pas été trouvé.
        </p>
        <Link to="/">Page d'accueil</Link>
      </div>
    </div>
  );
};

// NotFound.propTypes = {

// };

export default NotFound;
