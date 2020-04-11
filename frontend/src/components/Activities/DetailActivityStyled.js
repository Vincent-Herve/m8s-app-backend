import styled from 'styled-components';

const DetailActivityStyled = styled.div`
   
   background-color: #f4cba8;
   position: relative;
   min-height: 100vh;

   .content {
    padding-top: 10rem;
    text-align: center;

   }

   .content-title {
    padding-bottom: .6em;
    border-bottom: solid 2px black;
   }

   .content-username {
     border-bottom: solid 1.2px black;
     padding-bottom: 1em;
     font-size: 20px;
   }

   .content-description {
     padding-bottom: 1em;
     font-size: 20px;
   }

   .content-lieu {
     padding-bottom: 1em;
     font-size: 20px;
   }

   .content-free-place {
     padding-bottom: 1em;
     font-size: 20px;
   }


   .content-date {
     padding-bottom: 1em;
     font-size: 20px;
   }

   .content-heure {
     padding-bottom: 1em;
     font-size: 20px;
   }

   .content-tag {
    padding-top: 1em;
    font-weight: bold;
    color: #DE8400;
    font-size: 25px;
   }

  h3 {
    font-size: 1.5rem;
    margin-bottom: .5em;

  }

  .content-link {
    margin-bottom: 2em;
  }

  .content-view-link {
    text-decoration: none;
    font-size: 1rem;
    color: black;
    font-weight: bold;
    text-decoration: underline;
  }

  .register {
    text-decoration: none;
    border: solid 1.4px #DE8400;
    padding: .8em;
    color: white;
    background-color: #DE8400;
    font-weight: bold;
    transition: .3s ease-in-out;

    &:hover {
      text-decoration: none;
      border: solid 1.4px #DE8400;
      padding: .8em;
      color: #DE8400;
      background-color: #f4cba8;
      font-weight: bold;
    }
  }

  .delete {
    text-decoration: none;
    border: solid 1.4px #DE8400;
    padding: .8em;
    color: white;
    background-color: #DE8400;
    font-weight: bold;
    transition: .3s ease-in-out;

    &:hover {
      text-decoration: none;
      border: solid 1.4px #DE8400;
      padding: .8em;
      color: #DE8400;
      background-color: #f4cba8;
      font-weight: bold;
  }
  }

  .author-icon {
    position: absolute;
    top: 94px;
    right: 5px;
  }

  .link-edit {
    text-decoration: none;
    color: black;
    padding-left: 1em;
  }

  .underline {
    text-decoration: underline;
  }

@media screen and (max-width: 450px) {
  width: 100%;
  padding: 1em 1em; 
}


`;

export default DetailActivityStyled;
