import styled from 'styled-components';
import theme from 'src/styles/theme';

const ActivitiesStyled = styled.div`

min-height: 100vh;
background-color: #fff;
padding: 10em 0;
color: black;

.contain {
  text-align: center;
  color: black;
}

h1 {
  font-family: ${theme.fonts.title};
  color: #ff8800;
  text-align: center;
  margin-bottom: 1em;
  font-size: 2.4rem;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}


.link-activity {
  font-weight: bold;
  font-size: 2rem;
  color: black;
  padding: .5rem;
  border: 2px solid black;
}

@media screen and (max-width: 450px) {
  .contain {
    text-align: left;
    color: black;
  }
}
`;

export default ActivitiesStyled;
