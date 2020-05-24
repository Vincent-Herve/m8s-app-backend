import styled from 'styled-components';
import theme from 'src/styles/theme';

const SearchActivityStyled = styled.div`
  padding-top: 10em;
  min-height: 100vh;
  text-align: center;

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  select {
    margin-bottom: 1em;
    padding: .25em;
    border: 0;
    border-bottom: 2px solid ${theme.colors.primary}; 
    font-weight: bold;
    letter-spacing: .15em;
    border-radius: 0;

      &:focus, &:active {
        outline: 0;
        border-bottom-color: ${theme.colors.primary};
      }
  }
`;

export default SearchActivityStyled;
