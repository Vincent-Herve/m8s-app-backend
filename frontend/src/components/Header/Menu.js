import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from './Logo.svg';

const Menu = ({ isLogged, handleSignout }) => {
  const Signout = () => {
    handleSignout();
  };
  return (
    <Navbar className="nav transparent" fixed="top" expand="lg">
      <Navbar.Brand href="/" className="logo">M8S</Navbar.Brand>
      <Navbar.Toggle className="burger" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink exact to="/">Accueil</NavLink>
          <NavLink exact to="/activity">Activités</NavLink>
          <NavLink exact to="/activity/search">Rechercher une activité</NavLink>
          {isLogged && (
            <>
              <NavLink exact to="/profil">Mon profil</NavLink>
              <NavLink onClick={Signout} exact to="/disconnect">Se déconnecter</NavLink>
            </>
          )}
          {!isLogged && (
            <>
              <NavLink exact to="/signin">Connexion</NavLink>
              <NavLink exact to="/signup">Inscription</NavLink>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

Menu.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  handleSignout: PropTypes.func.isRequired,
};

export default Menu;
