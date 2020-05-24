import styled from 'styled-components';

const UnsubscribeStyled = styled.main`
 min-height: 100vh;
 padding: 10em 1.5em;

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

`;

export default UnsubscribeStyled;
