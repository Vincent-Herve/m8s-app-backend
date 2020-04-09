// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Signin from 'src/components/Signin';

// Action Creators
import { signin, changeValue } from 'src/actions/user';

const mapStateToProps = (state, ownProps) => ({
  email: state.user.email,
  password: state.user.password,
  isLogged: state.user.isLogged,
  isLoading: state.user.isLoading,
  messageError: state.user.messageError,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSignin: () => {
    dispatch(signin());
  },
  changeField: (value, name) => {
    dispatch(changeValue(value, name));
  },
});

// Container
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signin);
