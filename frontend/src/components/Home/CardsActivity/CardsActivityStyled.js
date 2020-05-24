import styled from 'styled-components';
import theme from 'src/styles/theme';

const CardsActivityStyled = styled.article`
  min-height: 100vh;
  padding-top: 6em;
  background-color: #fff;
  color: black;
  text-align: center;
    
  h1 {
    font-family: ${theme.fonts.title};
    color: ${theme.colors.primary};
    text-align: center;
    margin-bottom: 1em;
    font-size: 2.4rem;
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

  @media screen and (max-width: 770px) {
    .cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      margin: 2em auto;
    }
  }

  @media screen and (max-width: 450px) {
    text-align: left;
    
    .div-link {
      text-align: center;
      padding-top: .4em;
    }
  }
`;

export default CardsActivityStyled;
