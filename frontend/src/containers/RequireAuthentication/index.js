// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import RequireAuthentication from 'src/components/Helpers/RequireAuthentication';

// == Action Creators

const mapStateToProps = (state, ownProps) => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = null;

// Container
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RequireAuthentication);
