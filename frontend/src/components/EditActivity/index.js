/* eslint-disable no-alert */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
/* eslint-disable prefer-destructuring */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {
  Redirect,
} from 'react-router-dom';
import EditActivityStyled from './EditActivityStyled';

const EditActivity = (props) => {
  useEffect(() => {
    document.title = 'Modification d\'activité';
  }, []);

  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  function refreshPage() {
    window.location.reload(false);
  }

  const handleDeleteClick = () => {
    // eslint-disable-next-line no-restricted-globals
    const confirmation = confirm('Etes-vous sûr de vouloir supprimer votre activité ?');
    if (confirmation) {
      axios.delete(`http://localhost:3000/api/activity/${props.location.state.id}`, {})
        .then(() => {
          setLoading(true);
          setMessage('Suppression en cours');
          setTimeout(() => {
            setLoading(false);
            setRedirect(true);
            refreshPage();
          }, 700);
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
    // eslint-disable-next-line camelcase
    const free_place = data.get('free_place');
    const location = data.get('location');
    const date = data.get('date');
    const hour = data.get('hour');
    const tagId = data.get('tagId');
    const currentTag = props.location.state.currentTag;
    // eslint-disable-next-line camelcase
    if (title === '' || description === '' || free_place === '' || location === '' || date === '' || hour === '' || tagId === '1') {
      alert('Veuillez remplir tout les champs');
    }
    else if (props.location.state.current_place > free_place) {
      alert('Il y a plus d\'utilisateur inscrit que de place disponible')
    }
    else {
      axios.patch(`http://localhost:3000/api/activity/${props.location.state.id}`, {
        title,
        description,
        free_place,
        location,
        date,
        hour,
        tagId,
        currentTag,
      })
        .then(() => {
          setLoading(true);
          setMessage('Modification en cours');
          setTimeout(() => {
            setLoading(false);
            setRedirect(true);
            refreshPage();
          }, 700);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  const titleLabel = 'Titre';
  const descriptionLabel = 'Description';
  const free_placeLabel = 'Places disponibles';
  const locationLabel = 'Lieu';
  const dateLabel = 'Date';
  const hourLabel = 'Heure';
  const tagLabel = 'Tag';

  return (
    <EditActivityStyled>
      <div className="contain">
        {redirect && <Redirect to="/activity" />}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">{titleLabel} :</label>
            <input type="text" defaultValue={props.location.state.title} id="name" name="title" placeholder={titleLabel} />
          </div>
          <div>
            <label htmlFor="description">{descriptionLabel} :</label>
            <input type="text" defaultValue={props.location.state.description} id="description" name="description" placeholder={descriptionLabel} />
          </div>
          <div>
            <label htmlFor="free_place">{free_placeLabel} :</label>
            <input name="free_place" defaultValue={props.location.state.free_place} id="free_place" type="number" placeholder={free_placeLabel} />
          </div>
          <div>
            <label htmlFor="location">{locationLabel} :</label>
            <input type="text" defaultValue={props.location.state.location} id="location" name="location" placeholder={locationLabel} />
          </div>
          <div>
            <label htmlFor="date">{dateLabel} :</label>
            <input type="date" defaultValue={props.location.state.date} id="date" name="date" />
          </div>
          <div>
            <label htmlFor="hour">{hourLabel} :</label>
            <input type="time" defaultValue={props.location.state.hour} id="hour" name="hour" />
          </div>
          <div>
            <label htmlFor="chooseTag">{tagLabel} :</label>
            <select name="tagId" id="chooseTag">
              {props.location.state.tagList.map((tag) => (
                <option key={tag.id} value={tag.id}>{tag.name}</option>
              ))}
            </select>
          </div>
          <div>
            <button type="submit">Valider</button>
          </div>
        </form>
        <button type="button" onClick={handleDeleteClick}>Supprimer une activité</button>
        {loading && <p style={{ fontWeight: 'bold' }}>{message}</p>}
      </div>
    </EditActivityStyled>
  );
};

EditActivity.propTypes = {
  location: PropTypes.object.isRequired,
};

export default EditActivity;
