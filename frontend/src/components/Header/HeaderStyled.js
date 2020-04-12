import styled from 'styled-components';
import theme from 'src/styles/theme';

const HeaderStyled = styled.header`

.logo {
      width: 100%;
      height: auto;
      padding: .5em;
      margin-right: .4em;
  }

.nav {
      height: 10vh;
      display: flex;
      justify-content: center;
      align-items: center;
  }

@media screen and (max-width: 450px) {

  .logo {
      width: 50%;
      height: auto;
      padding: .5em;
      margin-right: .2em;
  }

    .nav {
      height: 15vh;
      display: flex;
      justify-content: unset;
      align-items: center;
  }

    .burger {
      background-color: burlywood;
  }
}

    .transparent {
      background-color: rgba(0, 0, 0, .3);
  }

    a {
      color: #fff;
      text-shadow: #000000 1px 1px, #000000 -1px 1px, #000000 -1px -1px, #000000 1px -1px;
      font-family: ${theme.fonts.text2};
      font-size: 1.3em;
      padding: 0 .6em;
      transition: .8s;
     

        &:hover {
          color: #DE8400;
          font-family: ${theme.fonts.text2};
          
        }
  }
`;

export default HeaderStyled;
