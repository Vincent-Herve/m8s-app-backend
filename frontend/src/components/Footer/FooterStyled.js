import styled from 'styled-components';
import theme from 'src/styles/theme';

const FooterStyled = styled.footer`
background-color: #999999;
padding: 2em 0;
width: 100%;
text-align: center;
position: absolute;

a {
  padding: 0 1em;
  color: black;
  font-size: 1.4em;
  font-family: ${theme.fonts.text2};
}

@media screen and (max-width: 400px) {
  padding: 2em 0 2em 0;
  width: 100%;
  text-align: center;

  a {
    margin: 0 10px;
    color: black;
    font-size: 0.9em;
    font-family: ${theme.fonts.text2};
    padding: .7em;
  }
}

@media screen and (max-width: 720px) {

  a {
    font-size:1.1em;
  }
}
`;

export default FooterStyled;
