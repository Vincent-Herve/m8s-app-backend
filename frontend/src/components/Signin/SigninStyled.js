import styled from 'styled-components';
import theme from 'src/styles/theme';

const SigninStyled = styled.main`
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

  h1 {
    font-family: ${theme.fonts.text2};
  }

  .links {
      text-decoration: none;
      font-size: 1.5rem;
      color: black;
  }

  .error {
    color: red;
  }

  .loginBtn {
    box-sizing: border-box;
    position: relative;
    /* width: 13em;  - apply for fixed size */
    margin: 0.2em;
    padding: 0 15px 0 46px;
    border: none;
    text-align: left;
    line-height: 34px;
    white-space: nowrap;
    border-radius: 0.2em;
    font-size: 16px;
    color: #FFF;

    a {
      text-decoration: white;
      color: white;
    }
  }
.loginBtn:before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 34px;
  height: 100%;
}
.loginBtn:focus {
  outline: none;
}
.loginBtn:active {
  box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);
}


/* Facebook */
.loginBtn--facebook {
  background-color: #4C69BA;
  background-image: linear-gradient(#4C69BA, #3B55A0);
  /*font-family: "Helvetica neue", Helvetica Neue, Helvetica, Arial, sans-serif;*/
  text-shadow: 0 -1px 0 #354C8C;
}
.loginBtn--facebook:before {
  border-right: #364e92 1px solid;
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;
}
.loginBtn--facebook:hover,
.loginBtn--facebook:focus {
  background-color: #5B7BD5;
  background-image: linear-gradient(#5B7BD5, #4864B1);
}

.contain-links {
  padding-top: 3em;
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

export default SigninStyled;
