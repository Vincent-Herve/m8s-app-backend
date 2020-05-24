import styled from 'styled-components';
import theme from 'src/styles/theme';

const AppStyled = styled.div`
  font-family: ${theme.fonts.text};

  h1 {
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.title};
    font-size: ${theme.size.title};
  }

  h2 {
    font-size: 1.9rem;
  }

  h3 {
    font-size: 1.6rem;
  }

  p {
    font-size: ${theme.size.text};
  }

  .pageNotFind {
    font-size: 2em;
    color: white;
  }

  .style-loading {
    min-height: 100vh;
    background-color: #EDA760;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default AppStyled;
