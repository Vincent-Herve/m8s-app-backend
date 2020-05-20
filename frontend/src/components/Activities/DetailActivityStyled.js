import styled from 'styled-components';
import theme from 'src/styles/theme';

const DetailActivityStyled = styled.div`
  padding-top: 5rem;
  background-color: #f1f1f1;
  position: relative;
  min-height: 100vh;

  h3 {
    padding-top: 1em;
  }

  .content {
    text-align: center;
  }

  .content-title {
    padding: 2em 0;
    background-color: ${theme.colors.primary};
    color: white;
    border-bottom: solid 2px black;
  }

  .user-list {
    padding-bottom: 1.4em;
    border-bottom: solid 1px black;

    li {
      display: inline;
      padding: 0 .5em;
    }
  }

  .content-username {
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
  color: ${theme.colors.primary};
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
    border: solid 1.4px ${theme.colors.primary};
    padding: .8em;
    color: white;
    background-color: ${theme.colors.primary};
    font-weight: bold;
    transition: .3s ease-in-out;

    &:hover {
      text-decoration: none;
      border: solid 1.4px ${theme.colors.primary};
      padding: .8em;
      color: ${theme.colors.primary};
      background-color: white;
      font-weight: bold;
    }
  }

  .delete {
    text-decoration: none;
    border: solid 1.4px ${theme.colors.primary};
    padding: .8em;
    color: white;
    background-color: ${theme.colors.primary};
    font-weight: bold;
    transition: .3s ease-in-out;

    &:hover {
      text-decoration: none;
      border: solid 1.4px ${theme.colors.primary};
      padding: .8em;
      color: ${theme.colors.primary};
      background-color: white;
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
    font-size: 1.5em;
  }

  .bold {
    font-weight: bold;
  }

  .message {
    padding-top: .6em;
  }

  @media screen and (max-width: 770px) {
    .author-icon {
    position: absolute;
    top: 101px;
    right: 5px;
  }
  }

  @media screen and (max-width: 450px) {
    min-height: 105vh;

    .div-link {
      padding-bottom: .8em;
    }

    .message {
      padding: .6em 0;
      margin: 0;
    }

  }
`;

export default DetailActivityStyled;
