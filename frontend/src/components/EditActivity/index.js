import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {
  Redirect,
} from 'react-router-dom';
import EditActivityStyled from './EditActivityStyled';


const EditActivity = (props) => {

  const [redirect, setRedirect] = useState(false);

  function refreshPage() {
    window.location.reload(false);
  }

  const handleDeleteClick = () => {
    const confirmation = confirm('êtes-vous sûr de vouloir supprimer votre activité ?');
    if (confirmation) {
      axios.delete(`http://localhost:3000/activity/${props.location.state.id}`, {},
        {
          withCredentials: true,
        })
        .then((response) => {
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };


  const handleSubmit = (evt) => {
    evt.preventDefault();

    const data = new FormData(evt.target);
    const title = data.get('title');
    const description = data.get('description');
    const free_place = data.get('free_place');
    const location = data.get('location');
    const date = data.get('date');
    const hour = data.get('hour');
    const tagId = data.get('tagId');
    const currentTag = props.location.state.currentTag;
    if (title === '' || description === '' || free_place === '' || location === '' || date === '' || hour === '' || tagId === '') {
      alert('Veuillez remplir tout les champs');
    } else if (props.location.state.current_place > free_place) {
      alert('Il y a plus d\'utilisateur inscrit que de place disponible')
    } else {
      axios.patch(`http://localhost:3000/activity/${props.location.state.id}`, {
        title,
        description,
        free_place,
        location,
        date,
        hour,
        tagId,
        currentTag,
      }, {
        withCredentials: true,
      })
        .then((response) => {
          setRedirect(true);
          refreshPage();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <EditActivityStyled>
      <div className="contain">
        {redirect && (
          <Redirect to="/profil" />
        )}
        <form onSubmit={handleSubmit}>
          <p>Titre : </p>
          <input type="text" defaultValue={props.location.state.title} name="title" placeholder="Titre" />
          <p>Description :</p>
          <input type="text" defaultValue={props.location.state.description} name="description" placeholder="Description" />
          <p>Places disponibles :</p>
          <input name="free_place" defaultValue={props.location.state.free_place} type="number" placeholder="Places disponibles" />
          <p>Lieu : </p>
          <input type="text" defaultValue={props.location.state.location} name="location" placeholder="Location" />
          <p>Date :</p>
          <input type="date" defaultValue={props.location.state.date} name="date" />
          <p>Heure :</p>
          <input type="time" defaultValue={props.location.state.hour} name="hour" />
          <p>Tag :</p>
          <select name="tagId" id="chooseTag">
            {props.location.state.tagList.map((tag) => (
              <option key={tag.id} value={tag.id}>{tag.name}</option>
            ))}
          </select>
          <div>
           <button type="submit">Valider</button> 
          </div>
          
        </form>
        <button type="button" onClick={handleDeleteClick}>Supprimer une activité</button>
      </div>
    </EditActivityStyled>
  );
};

export default EditActivity;
