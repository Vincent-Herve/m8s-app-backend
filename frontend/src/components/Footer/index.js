import React from 'react';
import { NavLink } from 'react-router-dom';

import FooterStyled from './FooterStyled';

const Footer = () => (
  <FooterStyled>
    <NavLink exact to="/contact">Contact</NavLink>
    <NavLink exact to="/notices">Mentions légales</NavLink>
  </FooterStyled>
);

export default Footer;
