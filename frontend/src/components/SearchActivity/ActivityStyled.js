import styled from 'styled-components';
import theme from 'src/styles/theme';

const ActivityStyled = styled.div`
  padding: 2.2rem 1em;
   margin: 2rem;
   border-radius: 5px;
   width: 28%;
   box-shadow: 1px 0px 7px -2px #000000;
   background-color: #f4cba8;
   transition: .3s ease-in-out;
   position: relative;

   &:hover {
    transform: scale(1.1);
   }

   .content-title {
    padding-bottom: .6em;
    border-bottom: solid 2px black;
   }

   .content-user {
     border-bottom: solid 1.2px black;
     padding-bottom: 1em;
   }

   .content-name {
    display: inline;
    margin: .6em .6em;
   }

   .content-tag {
    padding-top: 1.4em;
    font-weight: bold;
    color: #DE8400;
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

  .author-icon {
    position: absolute;
    top: 2px;
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
}


`;


export default ActivityStyled;
