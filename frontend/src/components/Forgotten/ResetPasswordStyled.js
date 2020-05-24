import styled from 'styled-components';
import theme from 'src/styles/theme';

const ResetPasswordStyled = styled.div`
  padding-top: 10em;
  min-height: 100vh;
  text-align: center;

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

  .links {
      text-decoration: none;
      font-size: 1.5rem;
      color: black;
  }

  .error {
    color: red;
  }

@media screen and (max-width: 720px) {

  border-radius:0px;

  h1 {
    font-size:2.4em;
    font-family: ${theme.fonts.text2};
  }

  .login-form-button {
    font-size: 20px;
    display: inline-block;
    padding: 8px 12px;
    margin: 2rem 0 5rem 0;
    border-radius: 25px;
    text-decoration: none;
    color: #FFF;
    background-image: -webkit-linear-gradient(45deg, #FFC107 0%, #ff8b5f 100%);
    background-image: linear-gradient(45deg, #FFC107 0%, #ff8b5f 100%);
    transition: .6s;
  }

.login-form-button:hover {
    background-image: -webkit-linear-gradient(45deg, #FFC107 0%, #f76a35 100%);
    background-image: linear-gradient(45deg, #FFC107 0%, #f76a35 100%);

}

.links {
    text-decoration: none;
    font-size: 1.2rem;
    color: black;
}

@media screen and (max-width: 400px) {

  border-radius:0px;

  h1 {
    font-size:1.9em;
  }

  .login-form-button {
    font-size: 15px;
    display: inline-block;
    padding: 8px 14px;
    margin: 2rem 0 5rem 0;
    border-radius: 25px;
    text-decoration: none;
    color: #FFF;
    background-image: -webkit-linear-gradient(45deg, #FFC107 0%, #ff8b5f 100%);
    background-image: linear-gradient(45deg, #FFC107 0%, #ff8b5f 100%);
    transition: .6s;
  }

  .login-form-button:hover {
    background-image: -webkit-linear-gradient(45deg, #FFC107 0%, #f76a35 100%);
    background-image: linear-gradient(45deg, #FFC107 0%, #f76a35 100%);
  }
`;

export default ResetPasswordStyled;
