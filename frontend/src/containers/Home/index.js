import { connect } from 'react-redux';

import Home from 'src/components/Home';


const mapStateToProps = (state, ownProps) => ({
  isLogged: state.user.isLogged,
  userProfil: state.user.userProfil,
});

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
