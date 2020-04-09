// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Profil from 'src/components/Profil';

// Action Creators
import { signout } from 'src/actions/user';

const mapStateToProps = (state, ownProps) => ({
  userProfil: state.user.userProfil,
  activities: state.activities.list,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSignout: () => {
    dispatch(signout());
  },
});

// Container
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profil);
