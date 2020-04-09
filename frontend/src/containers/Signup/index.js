import { connect } from 'react-redux';
import Signup from 'src/components/Signup';

import { signup, changeValue, messageError } from 'src/actions/user';

const mapStateToProps = (state, ownProps) => ({
  username: state.user.username,
  firstname: state.user.firstname,
  lastname: state.user.lastname,
  email: state.user.email,
  password: state.user.password,
  passwordConfirm: state.user.passwordConfirm,
  isLoading: state.user.isLoading,
  messageError: state.user.messageError,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSignup: () => {
    dispatch(signup());
  },
  changeField: (value, name) => {
    dispatch(changeValue(value, name));
  },
  setMessageError: (message) => {
    dispatch(messageError(message));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);
