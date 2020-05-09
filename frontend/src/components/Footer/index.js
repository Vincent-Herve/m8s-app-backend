import React from 'react';
import { NavLink } from 'react-router-dom';

import FooterStyled from './FooterStyled';

const Footer = () => (
  <FooterStyled>
    <NavLink exact to="/about">A propos</NavLink>
    <NavLink exact to="/notices">Mentions légales</NavLink>
    <NavLink exact to="/contact">Contact</NavLink>
  </FooterStyled>
);

export default Footer;
