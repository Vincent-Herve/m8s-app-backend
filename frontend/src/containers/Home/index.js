import { connect } from 'react-redux';

import Home from 'src/components/Home';


const mapStateToProps = (state, ownProps) => ({
  isLogged: state.user.isLogged,
  userProfil: state.user.userProfil,
  activities: state.activities.list,
});

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
