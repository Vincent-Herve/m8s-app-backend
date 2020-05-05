// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import VerifyAccount from 'src/components/VerifyAccount';

// == Action Creators
import { getVerifyAccount } from 'src/actions/user';

const mapStateToProps = (state, ownProps) => ({
  isVerified: state.user.isVerified,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getVerifyAccount: (token) => {
    dispatch(getVerifyAccount(token));
  },
});

// Container
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VerifyAccount);
