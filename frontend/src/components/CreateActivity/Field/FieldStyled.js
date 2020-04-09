import styled from 'styled-components';

const FieldStyled = styled.main`

input {
  width: 40%;
  border: 2px solid white;
  margin: 1em;
  border-bottom: 2px solid #f4cba8;
  padding: 0.5em;
  background: transparent;

}


input:focus{
  border: 2px solid #DE8400;
  transition-duration: 0.5s;
  border-radius: 9px;
}

`;

export default FieldStyled;
