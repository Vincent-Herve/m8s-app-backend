// == Import npm
import React, { useEffect } from 'react';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Home from 'src/containers/Home';
import Signup from 'src/containers/Signup';
import Signin from 'src/containers/Signin';
import Profil from 'src/containers/Profil';
import DetailActivity from 'src/containers/DetailActivity';
import CreateActivity from 'src/containers/CreateActivity';
import SearchActivity from 'src/containers/SearchActivity';
import EditActivity from 'src/components/EditActivity';
import Unsubscribe from 'src/containers/Profil/Unsubscribe';
import EditProfil from 'src/containers/Profil/EditProfil';
import Activities from 'src/containers/Activities';
import CardsActivity from 'src/containers/CardsActivity';
import Presentation from 'src/components/Home/Presentation';
import Contact from 'src/components/Contact';
import Notice from 'src/components/Mentions-légales';
import PropTypes from 'prop-types';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import AppStyled from './AppStyled';


const App = (
  {
    redirection,
    setRedirection,
    redirectionCreate,
    setRedirectionCreate,
    isLogged,
    checkIsLogged,
    fetchActivities,
    isLoading,
    reload,
  },
) => {
  if (redirection) {
    setRedirection();
  }

  if (redirectionCreate) {
    setRedirectionCreate();
  }

  // Vérifier si session toujours active coté back
  useEffect(checkIsLogged, []);
  useEffect(fetchActivities, [redirectionCreate, reload]);

  return (
    <AppStyled>
      <Header />
      {isLoading && <div>Veuillez patienter</div>}
      {redirection && (
        <Redirect to="/" />
      )}
      <Switch>
        {!isLoading && (
          <Route path="/" exact>
            <Home />
            {!isLogged && (
              <>
                <CardsActivity />
                <Presentation />
              </>
            )}
          </Route>
        )}
        {redirectionCreate && (
          <Redirect to="/activity" />
        )}
        <Route path="/activity" exact>
          <Activities />
        </Route>
        <Route path="/activity/search" exact>
          <SearchActivity />
        </Route>
        {!isLoading && (
          <Route path="/activity/:slug" exact component={DetailActivity} />
        )}
        <Route path="/editactivity" exact component={EditActivity} />
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/notices" exact>
          <Notice />
        </Route>
        {isLogged && (
          <>
            <Route path="/create" exact>
              <CreateActivity />
            </Route>
            {!isLoading && (
              <Route path="/profil" exact>
                <Profil />
              </Route>
            )}
            <Route path="/editprofil" exact>
              <EditProfil />
            </Route>
            <Route path="/unsubscribe" exact>
              <Unsubscribe />
            </Route>
          </>
        )}
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="/signin" exact>
          <Signin />
        </Route>
      </Switch>
      <Footer />
    </AppStyled>
  );
};

App.propTypes = {
  fetchActivities: PropTypes.func.isRequired,
  redirection: PropTypes.bool.isRequired,
  setRedirection: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  checkIsLogged: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  redirectionCreate: PropTypes.bool.isRequired,
  setRedirectionCreate: PropTypes.func.isRequired,
  reload: PropTypes.bool.isRequired,
};

// == Export
export default App;
