import styled from 'styled-components';
import theme from 'src/styles/theme';
import ImageBackground from './ImageBackground.jpg';

const HomeStyled = styled.div`
  min-height: 100vh;
  color: black;
  background-image: linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url(${ImageBackground});
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;

  .contain {
    text-align: center;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: white;
    font-weight: bold;

    h1 {
      font-size: 8em;
      color: white;
    }

    h2 {
      font-size: 2.6rem;
      margin-bottom: 1.2rem;
      font-weight: bold;
    }

    p {
      font-size: 1.6em;
      margin: 0;
    }
  }

  .subtitle {
    font-size: 2rem;
  }

  .lien-activity {
    padding: 0.4rem;
    font-family: 'Roboto', sans-serif;
    color:black;

    background-color:white;
    font-size: 1.8rem;
    border: 2px solid black;
    border-radius: 12px;
    align-self: center;

      &:hover {
        background-color: #DE8400;
        text-decoration:none;
        border:2px solid white;
        color:white;
        font-size:2rem;
        transition-duration:0.2s;
        font-weight:bold;
      }
  }

  .square_btn {
    display: inline-block;
    padding: 1.3em 1.5em;
    text-decoration: none;
    border-radius: 4px;
    align-self: center;
    color: #ffffff;
    background-image: -webkit-linear-gradient(45deg, #FFC107 0%, #ff8b5f 100%);
    background-image: linear-gradient(45deg, #FFC107 0%, #ff8b5f 100%);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
    border-bottom: solid 3px #c58668;
      &:active {
        -ms-transform: translateY(4px);
      -webkit-transform: translateY(4px);
      transform: translateY(4px);
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
      border-bottom: none;
    }
  }

@media screen and (max-width: 450px) {
  min-height: 100vh;
  color: black;
  background-image: linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url(${ImageBackground});
  display: flex;
  justify-content: center;
  align-items: center;

  .contain {
    text-align: center;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: white;
    padding: 0 .4em;

    h1 {
      color: white;
      font-size: 6em;
    }
  }

  .subtitle {
    font-size: .8rem;
  }

  h2 {
    font-size: 2.3rem;
  }

  p {
    padding: .8em 0;
  }

  .lien-activity {
    font-size: 1.2rem;
    border: 2px solid black;
    border-radius: 12px;
  }

  .div-link {
    margin-top: 2em;
  }
}

`;
export default HomeStyled;
