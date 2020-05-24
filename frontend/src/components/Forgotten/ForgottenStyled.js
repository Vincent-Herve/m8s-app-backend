import styled from 'styled-components';
import theme from 'src/styles/theme';


const ForgottenStyled = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
  width: 60%;
  border: 2px solid white;
  margin: 1em;
  border-bottom: 2px solid ${theme.colors.primary};
  padding: 0.5em;
  background: transparent;
}

  input:focus {
    border: 2px solid ${theme.colors.primary};
    transition-duration: 0.5s;
    border-radius: 9px;
  }

  button {
    font-size: 30px;
    display: inline-block;
    padding: 10px 20px;
    margin: 2rem 0 5rem 0;
    border-radius: 25px;
    text-decoration: none;
    color: #FFF;
    background-image: -webkit-linear-gradient(45deg, #FFC107 0%, #ff8b5f 100%);
    background-image: linear-gradient(45deg, #FFC107 0%, #ff8b5f 100%);
    transition: .6s;

    &:hover {
      background-image: -webkit-linear-gradient(45deg, #FFC107 0%, #f76a35 100%);
      background-image: linear-gradient(45deg, #FFC107 0%, #f76a35 100%);
    }
  }

  label {
    font-size: 1.1em;
  }

  @media screen and (max-width: 450px) {
    padding: 0 3em;
  }
`;

export default ForgottenStyled;
