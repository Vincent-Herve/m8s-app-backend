import styled from 'styled-components';
import theme from 'src/styles/theme';

const ActivityStyled = styled.div`
  padding: 2.2rem 1em;
  margin: 2rem;
  width: 25%;
  box-shadow: 1px 0px 6px -2px #000000;
  background-color: #f1f1f1;
  transition: .3s ease-in-out;
  position: relative;

  &:hover {
  transform: scale(1.03);
  }

  p {
    margin-bottom: 1rem;
  }


  .content-closed {
    opacity: 0.4;
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
  color: ${theme.colors.primary};
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
    top: 2px;
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
    width: 70%;
    padding: 1rem .8em;
    margin: 2rem;
    box-shadow: 1px 0px 6px -2px #000000;
    background-color: #f1f1f1;
    transition: .3s ease-in-out;
    position: relative;

    .register {
      text-decoration: none;
      padding: .7em;
      color: white;
      background-color: ${theme.colors.primary};
      font-weight: bold;
      transition: .3s ease-in-out;
    }
  }

  @media screen and (max-width: 450px) {
    width: 100%;
    padding: 1rem .8em;
    margin: 2rem;
    box-shadow: 1px 0px 6px -2px #000000;
    background-color: #f1f1f1;
    transition: .3s ease-in-out;
    position: relative;

    .div-link {
      text-align: center;
      padding-top: .4em;
    }

    .register {
      text-decoration: none;
      padding: .6em;
      color: white;
      background-color: ${theme.colors.primary};
      font-weight: bold;
      transition: .3s ease-in-out;
    }

    .message {
      text-align: center;
    }
  }
`;

export default ActivityStyled;

