import { connect } from 'react-redux';

import CardsActivity from 'src/components/Home/CardsActivity';


/* === State (données) === */
const mapStateToProps = (state, ownProps) => {
  return ({
    activity: state.activities.list,
  });
};

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardsActivity);
