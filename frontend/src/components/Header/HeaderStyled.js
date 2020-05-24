import styled from 'styled-components';
import theme from 'src/styles/theme';

const HeaderStyled = styled.header`
  .logo {
    color: #ff8800;
    font-family: ${theme.fonts.title};
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
    background-color: ${theme.colors.secondary};
    justify-content: center;
    align-items: center;
  }

  a {
    color: #fff;
    font-family: ${theme.fonts.title};
    font-size: 1.4em;
    padding: 0 .6em;
    transition: .4s;

    &:hover {
      color: #ff8800;
      font-family: ${theme.fonts.title};
    }
  }

  @media screen and (max-width: 770px) {
    .nav {
      display: flex;
      justify-content: space-between;
      background-color: ${theme.colors.secondary};
      align-items: center;
    }

    .logo {
      width: 50%;
      font-size: 3em;
      padding: 0;
      margin-left: .2em;
    }

    .burger {
      margin-right: .5em;
      background-color: burlywood;
    }

    a {
      color: white;
      font-family: ${theme.fonts.title};
      background-color: ${theme.colors.secondary};
      font-size: 1.3em;
      padding: .1em .5em;
      transition: .4s;
    }
  }

  @media screen and (max-width: 450px) {
    .logo {
      width: 50%;
      font-size: 2.4em;
      padding: .2em;
      margin-right: .2em;
    }

    .nav {
      height: 12vh;
      display: flex;
      background-color: ${theme.colors.secondary};
      justify-content: space-between;
      align-items: center;
    }

    .burger {
      background-color: burlywood;
      margin-right: .5em;
    }

    a {
      color: white;
      font-family: ${theme.fonts.title};
      background-color: ${theme.colors.secondary};
      font-size: 1.3em;
      padding: .1em .5em;
      transition: .4s;
    }
  }

    

    
`;

export default HeaderStyled;
