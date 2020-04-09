import { connect } from 'react-redux';

import Unsubscribe from 'src/components/Profil/Unsubscribe';

import { unsubscribe } from 'src/actions/user';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleUnsubscribe: () => {
    dispatch(unsubscribe());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Unsubscribe);
