import styled from 'styled-components';

const ProfilStyled = styled.main`
  padding-top: 10em;
  min-height: 100vh;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h1 {
    padding-bottom: 1em;
  }

  .button-tab {
    text-align: center;
    padding-bottom: .8em;

    button {
      margin: 4px;
      border-radius: 5px;
      border: solid 2px #eda760;
      background-color: #eda760;
    }
  }

  .links {
    text-decoration: none;
    font-size: 1.5rem;
    color: black;
    display: block;
}

.ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2em;
}

.button {
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

.section-activity {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contain-card {
  display: flex;
  justify-content: space-between;
}

.article {
  padding: 2.2rem 1em;
  margin: 2rem;
  border-radius: 5px;
  
  box-shadow: 1px 0px 7px -2px #000000;
  background-color: #f4cba8;
  transition: .3s ease-in-out;
  position: relative;

   &:hover {
    transform: scale(1.1);
   }

  .content-title {
    padding-bottom: .6em;
    border-bottom: solid 2px black;
   }

  h3 {
    font-size: 1.5rem;
    margin-bottom: .5em;

  }

  .content-link {
    margin-bottom: 2em;
  }

  .content-view-link {
    text-decoration: none;
    font-size: 1rem;
    color: black;
    font-weight: bold;
    text-decoration: underline;
  }

  .author-icon {
    position: absolute;
    top: 2px;
    right: 5px;
  }

  .underline {
    text-decoration: underline;
  }
}

@media screen and (max-width: 450px) {
  width: 100%;
}

`;

export default ProfilStyled;
