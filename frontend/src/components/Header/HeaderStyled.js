import styled from 'styled-components';
import theme from 'src/styles/theme';

const HeaderStyled = styled.header`

.logo {
      color: #ff8800;
      font-size: 3.5em;
      padding: .5em;
      margin-right: .4em;

      &:hover {
        color: #ff8800;
      }
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
      background-color: rgba(78, 78, 78, .6);
  }

    a {
      color: #fff;
      font-family: ${theme.fonts.text2};
      font-size: 1.4em;
      padding: 0 .6em;
      transition: .4s;

        &:hover {
          color: #ff8800;
          font-family: ${theme.fonts.text2};
        }
  }
`;

export default HeaderStyled;
