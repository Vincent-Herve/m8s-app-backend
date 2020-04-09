import styled from 'styled-components';

const CardsActivityStyled = styled.article`
  background-color: #f1f1f1;
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .flex-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

@media screen and (max-width: 450px) {
  text-align: left;
}
`;

export default CardsActivityStyled;
