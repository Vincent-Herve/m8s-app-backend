// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ResetPassword from 'src/components/Forgotten/ResetPassword';

// == Action Creators
import { getResetPassword, changeValue, messageError, patchResetPassword } from 'src/actions/user';

const mapStateToProps = (state, ownProps) => ({
  reset: state.user.reset,
  password: state.user.password,
  passwordConfirm: state.user.passwordConfirm,
  isLoading: state.user.isLoading,
  messageError: state.user.messageError,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getResetPassword: (token) => {
    dispatch(getResetPassword(token));
  },
  changeField: (value, name) => {
    dispatch(changeValue(value, name));
  },
  setMessageError: (message) => {
    dispatch(messageError(message));
  },
  handleReset: (token) => {
    dispatch(patchResetPassword(token));
  },
});

// Container
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResetPassword);
