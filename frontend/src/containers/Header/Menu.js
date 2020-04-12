// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Menu from 'src/components/Header/Menu';

// Action Creators
import { signout } from 'src/actions/user';

const mapStateToProps = (state, ownProps) => ({
  isLogged: state.user.isLogged,
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
)(Menu);
