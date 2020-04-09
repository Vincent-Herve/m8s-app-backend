import { connect } from 'react-redux';

// == Import : local
import Activities from 'src/components/Activities';

// Action Creators
import { registerActivity, leftActivity, fetchActivities } from 'src/actions/activities';

const mapStateToProps = (state, ownProps) => ({
  activities: state.activities.list,
  userProfilId: state.user.userProfil.id,
  isLogged: state.user.isLogged,
  tags: state.tag.list,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  registerActivity: (id, user) => {
    dispatch(registerActivity(id, user));
  },
  leftActivity: (id, user) => {
    dispatch(leftActivity(id, user));
  },
  fetchActivities: () => {
    dispatch(fetchActivities());
  },
});
// Container
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Activities);
