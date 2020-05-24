import styled from 'styled-components';
import theme from 'src/styles/theme';

const ActivitiesStyled = styled.div`
  min-height: 100vh;
  background-color: #fff;
  padding: 10em 0;
  text-align: center;
  color: black;

  .contain {
    text-align: center;
    color: black;
  }

  h1 {
    font-family: ${theme.fonts.title};
    color: ${theme.colors.primary};
    text-align: center;
    margin-bottom: 1em;
    font-size: 2.4rem;
  }

  .message {
    padding: 1em 0;
    font-size: 1.5em;
  }

  .activitiesOrNot {
    padding: 1em 0;
    font-size: 1.5em;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1500px;
    margin: 2em auto;
  }


  .link-activity {
    font-weight: bold;
    font-size: 2rem;
    color: black;
    padding: .5rem;
    border: 2px solid black;
  }

  select {
    margin-bottom: 1em;
    padding: .25em;
    border: 0;
    border-bottom: 2px solid ${theme.colors.primary}; 
    font-weight: bold;
    letter-spacing: .15em;
    border-radius: 0;

      &:focus, &:active {
        outline: 0;
        border-bottom-color: ${theme.colors.primary};
      }
  }

  .div-link {
    padding-top: 2em;
  }

  @media screen and (max-width: 770px) {
    .cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      margin: 2em auto;
    }
  }

  @media screen and (max-width: 450px) {
    .contain {
      text-align: left;
      color: black;
    }

    .div-link {
      text-align: center;
      padding-top: 1.5em;
    }

    .message {
      padding: 1em 0;
      text-align: center;
      font-size: 1.5em;
    }

    .activitiesOrNot {
      padding: 1em 0;
      text-align: center;
      font-size: 1.5em;
    }
  }
`;

export default ActivitiesStyled;
