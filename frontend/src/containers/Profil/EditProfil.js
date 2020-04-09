// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import EditProfil from 'src/components/Profil/EditProfil';

// Action Creators
import { editProfil, changeValue } from 'src/actions/user';

const mapStateToProps = (state, ownProps) => ({
  username: state.user.username,
  firstname: state.user.firstname,
  lastname: state.user.lastname,
  email: state.user.email,
  password: state.user.password,
  isLoading: state.user.isLoading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleEditProfil: () => {
    dispatch(editProfil());
  },
  changeField: (value, name) => {
    dispatch(changeValue(value, name));
  },
});

// Container
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditProfil);
