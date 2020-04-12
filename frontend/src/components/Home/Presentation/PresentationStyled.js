import styled from 'styled-components';

const PresentationStyled = styled.article`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 2rem;

  h1 {
    font-size: 3rem;
    margin-bottom: 3rem;
  }

  h2 {
    border-bottom: 1px solid #eda760;
  }

  h3 {
    color: #eda760;
  }

  img {
    width: 10rem;
    height: 8rem;
    border-radius: 20px;
    box-shadow: 0px 7px 8px 0px rgba(0,0,0,0.75);
  }

  .teams {
    display: flex;
    justify-content: space-between;
  }

  article {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    min-height: 40vh;
    margin: 3rem;
    max-width: 60rem;
  }

@media screen and (max-width: 450px) {
  .teams {
    display: flex;
    flex-direction: column;
  }

  article {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      min-height: 50vh;
      margin: 3rem;
      max-width: 60rem;
    }
}
`;

export default PresentationStyled;
