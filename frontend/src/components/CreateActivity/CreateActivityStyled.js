import styled from 'styled-components';


const CreateActivityStyled = styled.div`
  padding-top: 10em;
  min-height: 100vh;
  text-align: center;

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

  select {
    margin-bottom: 1em;
    padding: .25em;
    border: 0;
    border-bottom: 2px solid #f4cba8; 
    font-weight: bold;
    letter-spacing: .15em;
    border-radius: 0;
    &:focus, &:active {
      outline: 0;
      border-bottom-color: #DE8400;
    }
  }
`;

export default CreateActivityStyled;
