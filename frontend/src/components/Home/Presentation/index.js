import React from 'react';
import PresentationStyled from './PresentationStyled';
import ImageProfil from './ImageProfil.jpg';
import ImageProfil2 from './ImageProfil2.jpg';
import ImageProfil3 from './ImageProfil3.jpg';

const Presentation = () => (
  <PresentationStyled>
    <div>
      <h1>LA TEAM M8S</h1>
    </div>
    <div className="présentation">
      <p>La team se compose de 3 éléments exeptionnels de l'école O'clock !
        Nous avons Mike qui est à l'origine du projet mais qui hélas
        a dû quitter l'aventure trop tôt, nous avons Vincent en tant que lead Back et
        Franck en tant que lead Front.
      </p>
    </div>
    <div className="teams">
      <article>
        <h2>Vincent</h2>
        <h3>Lead Back</h3>
        <img src={ImageProfil} alt="vincent_image" />
        <p>Vincent tout droit sortit d'une grand école américaine
          a preféré se reconvertir
          en tant que developpeur, son génie dans le code nous a
          permis d'aller toujours plus loin malgré un côté extrênement sévére !
        </p>
      </article>
      <article>
        <h2>Mike</h2>
        <h3>Product owner</h3>
        <img src={ImageProfil2} alt="mike_image" />
        <p>Mike avait un avenir prometteur dans le Web mais suite à un départ soudain,
          il a dû stopper
          toutes acivités
          mais laissant ce projet en or entre de bonnes mains !
        </p>
      </article>
      <article>
        <h2>Franck</h2>
        <h3>Lead Front</h3>
        <img src={ImageProfil3} alt="franck_image" />
        <p>Franck tout droit sortit d'une usine à cambrer les bananes
          a décidé de se reconvertir en tant que developpeur,
          son amour du code et son côté artitisque a mené le projet à sa
          finalité malgré un côté trop docile !
        </p>
      </article>
    </div>
  </PresentationStyled>
);

export default Presentation;
