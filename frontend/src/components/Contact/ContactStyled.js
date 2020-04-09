import styled from 'styled-components';
// import theme from 'src/styles/theme';


const ContactStyled = styled.div`
    min-height: 100vh;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .main {
      background-color: #F0F0F0;
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

    input {
      width: 40%;
      border: 2px solid;
      margin: 1em;
      padding: 0.5em;
      background: transparent;
  }
    input:focus{
      border: 2px solid #DE8400;
      transition-duration: 0.5s;
      border-radius: 9px;
  }

  button {
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

  textarea {
    width: 40%;
      border: 2px solid;
      margin: 1em;
      padding: 0.5em;
      background: transparent;
  }
    textarea:focus{
      border: 2px solid #DE8400;
      transition-duration: 0.5s;
      border-radius: 9px;
  }
  }

    .text {
      width: 15rem;
      height: 7rem;
    }
    .logo {
      filter: invert(70%);
    }

    @media screen and (max-width: 450px) {

      .main {
      background-color: #F0F0F0;
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

    input {
      width: 60%;
      border: 2px solid;
      margin: 1em;
      padding: 0.5em;
      background: transparent;
  }
    input:focus{
      border: 2px solid #DE8400;
      transition-duration: 0.5s;
      border-radius: 9px;
  }

  button {
    text-decoration: none;
    border: solid 1.4px #DE8400;
    padding: .4em;
    color: white;
    background-color: #DE8400;
    font-weight: bold;
    transition: .3s ease-in-out;

    &:hover {
      text-decoration: none;
      border: solid 1.4px #DE8400;
      padding: .4em;
      color: #DE8400;
      background-color: #f4cba8;
      font-weight: bold;
  }
  }

  textarea {
    width: 60%;
      border: 2px solid;
      margin: 1em;
      padding: 0.5em;
      background: transparent;
  }
    textarea:focus{
      border: 2px solid #DE8400;
      transition-duration: 0.5s;
      border-radius: 9px;
  }
  }

    .text {
      width: 15rem;
      height: 7rem;
    }
    .logo {
      filter: invert(70%);
    }
    }
`;

export default ContactStyled;
