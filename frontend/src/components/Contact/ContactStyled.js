import styled from 'styled-components';
import theme from 'src/styles/theme';

const ContactStyled = styled.div`
  min-height: 100vh;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    width: 40%;
    border: 2px solid white;
    margin: 1em;
    border-bottom: 2px solid ${theme.colors.primary};
    padding: 0.5em;
    background: transparent;
  }

  input:focus{
    border: 2px solid ${theme.colors.primary};
    transition-duration: 0.5s;
    border-radius: 9px;
  }

  .main {
    border-radius: 5%;
    padding: 1.5rem;
  }

  h1 {
    font-size: 4rem;
    margin-bottom: 5rem;
  }

  p {
    font-size: 20px;
    margin: 5px;
  }

  label {
    width: 5em;
  }

  button {
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
        background-color: #fff;
        font-weight: bold;
      }
  } 

  textarea {
    width: 40%;
    border: 2px solid ${theme.colors.primary};
    margin: 1em;
    padding: 0.5em;
    background: transparent;
  }
    textarea:focus{
      border: 2px solid ${theme.colors.primary};
      transition-duration: 0.5s;
      border-radius: 9px;
  }

  .text {
    width: 15rem;
    height: 7rem;
  }
  .logo {
    filter: invert(70%);
  }

  @media screen and (max-width: 770px) {
    max-width: 550px;
    margin: 0 auto;
  }

  @media screen and (max-width: 450px) {

    .main {
      border-radius: 5%;
      padding: 1.5rem;
      margin: 8rem 1rem 2rem 1rem;
    }

    h1 {
      font-size: 1.8rem;
      margin-bottom: 3rem;
    }

    p {
      font-size: 13px;
      margin: 3px;
    }

    textarea {
      width: 90%;
    }
  }

  .text {
    width: 15rem;
    height: 7rem;
  }
`;

export default ContactStyled;
