// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import App from 'src/components/App';
import { fetchActivities, redirectionCreate } from 'src/actions/activities';

// Action Creators
import { redirection, checkIsLogged, messageError } from 'src/actions/user';

const mapStateToProps = (state, ownProps) => ({
  redirection: state.user.redirection,
  redirectionCreate: state.activities.redirectionCreate,
  isLogged: state.user.isLogged,
  isLoading: state.activities.isLoading,
  reload: state.user.reload,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setRedirection: () => {
    dispatch(redirection());
  },
  setRedirectionCreate: () => {
    dispatch(redirectionCreate());
  },
  checkIsLogged: () => {
    dispatch(checkIsLogged());
  },
  fetchActivities: () => {
    dispatch(fetchActivities());
  },
  messageError: (message) => {
    dispatch(messageError(message));
  },
});

// Container
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
