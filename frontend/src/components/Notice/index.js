import React, { useEffect } from 'react';
import NoticeStyled from './NoticeStyled';

const Notice = () => {
  useEffect(() => {
    document.title = 'Mentions légales';
  }, []);
  return (
    <NoticeStyled>
      <h1>Mentions-légales</h1>
      <p>En vigueur au 09/04/2020</p>
      <p>Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du
        21 juin 2004 pour la Confiance dans l’économie
        numérique, dite L.C.E.N., il est porté à la connaissance des Utilisateur
        du site http://m8s les présentes mentions
        légales.
        La connexion et la navigation sur le site (indiquer le nom du site) par
        l’utilisateur implique acceptation intégrale et sans réserve
        des présentes mentions légales.
        Ces dernières sont accessibles sur le site à la rubrique « Mentions légales ».
      </p>

      <h2>ARTICLE 1 : L’ÉDITEUR</h2>

      <p>L’édition et la direction de la publication du site http://m8s est assurée par Franck Dounry, domiciliée 17 rue joseph
        saint andré et l'adresse e-mail franckd2009@hotmail.fr.
      </p>

      <h2>ARTICLE 2 : L’HÉBERGEUR</h2>

      <p>L'hébergeur du site http://m8s est la Société AWS, dont le siège social est situé Californie.</p>

      <h2>ARTICLE 3 : ACCÈS AU SITE</h2>

      <p>Le site est accessible par tout endroit, 7j/7, 24h/24 sauf cas de force majeure,
        interruption programmée ou non et pouvant
        découlant d’une nécessité de maintenance.
        En cas de modification, interruption ou suspension des services le site http://m8s ne saurait être tenu responsable.
      </p>

      <h2>ARTICLE 4 : COLLECTE DES DONNÉES</h2>

      <p>Le site est exempté de déclaration à la Commission Nationale Informatique et Libertés
        (CNIL) dans la mesure où il ne collecte
        aucune donnée concernant les utilisateurs.
      </p>

      <h2>ARTICLE 5 : COOKIES</h2>

      <p>L’Utilisateur est informé que lors de ses visites sur le site, un cookie
        peut s’installer automatiquement sur son logiciel de
        navigation.
        En naviguant sur le site, il les accepte.
        Un cookie est un élément qui ne permet pas d’identifier l’Utilisateur mais sert à
        enregistrer des informations relatives à la
        navigation de celui-ci sur le site Internet. L’Utilisateur pourra désactiver ce cookie
        par l’intermédiaire des paramètres figurant au
        sein de son logiciel de navigation.
      </p>

      <h2>ARTICLE 6 : PROPRIÉTÉ INTELLECTUELLE</h2>

      <p>Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du site http://m8s, sans
        autorisation de l’Editeur est prohibée et pourra entraînée des actions et
        poursuites judiciaires telles que notamment prévues par
        le Code de la propriété intellectuelle et le Code civil.
      </p>
    </NoticeStyled>
  )
};

export default Notice;
