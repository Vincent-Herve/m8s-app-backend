// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Home from 'src/containers/Home';
import Signup from 'src/containers/Signup';
import Signin from 'src/containers/Signin';
import Profil from 'src/containers/Profil';
import DetailActivity from 'src/containers/DetailActivity';
import CreateActivity from 'src/containers/CreateActivity';
import SearchActivity from 'src/containers/SearchActivityByChange';
import EditActivity from 'src/components/EditActivity';
import Unsubscribe from 'src/containers/Profil/Unsubscribe';
import EditProfil from 'src/containers/Profil/EditProfil';
import Activities from 'src/containers/Activities';
import CardsActivity from 'src/containers/CardsActivity';
import Contact from 'src/components/Contact';
import Notice from 'src/components/Notice';
import RequireAuthentication from 'src/components/Helpers/RequireAuthentication';

import {
  Route,
  Switch,
  Redirect,
  useLocation,
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
  // once the redirection is done, we pass the boolean to false
  if (redirection) {
    setRedirection();
  }
  if (redirectionCreate) {
    setRedirectionCreate();
  }

  // Check if back side session is still active
  useEffect(checkIsLogged, []);

  // We consume API to get all activities, initial render and set redirectionCreate, reload
  useEffect(fetchActivities, [redirectionCreate, reload]);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <AppStyled>
      <Header />
      {redirection && <Redirect to="/" />}
      <Switch>
        <Route path="/" exact render={() => <><Home isLoading={isLoading} /><CardsActivity isLoading={isLoading} /></>} />
        {redirectionCreate && <Redirect to="/activity" />}
        <Route path="/activity" exact component={Activities} />
        <Route path="/activity/search" exact component={SearchActivity} />
        {!isLoading && <Route path="/activity/:slug" exact component={DetailActivity} />}
        <Route path="/editactivity" exact component={EditActivity} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/notices" exact component={Notice} />
        <Route path="/profil" exact component={RequireAuthentication(Profil, isLogged, isLoading)} />
        <Route path="/create" exact component={RequireAuthentication(CreateActivity, isLogged)} />
        <Route path="/editprofil" exact component={RequireAuthentication(EditProfil, isLogged)} />
        <Route path="/unsubscribe" exact component={RequireAuthentication(Unsubscribe, isLogged)} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
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
