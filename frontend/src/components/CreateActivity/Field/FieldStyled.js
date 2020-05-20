import styled from 'styled-components';
import theme from 'src/styles/theme';

const FieldStyled = styled.main`

input {
  width: 40%;
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

label {
  width: 7em;
}
`;

export default FieldStyled;
