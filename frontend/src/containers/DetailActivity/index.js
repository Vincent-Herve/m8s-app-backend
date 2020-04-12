import { connect } from 'react-redux';

// == Import : local
import DetailActivity from 'src/components/Activities/DetailActivity';

// Action Creators & Selector
import { getActivityBySlug } from 'src/selectors/Activities';

import { registerActivity, leftActivity, fetchActivities } from 'src/actions/activities';

/* === State (données) === */
const mapStateToProps = (state, ownProps) => ({
  activity: getActivityBySlug(state.activities.list, ownProps.match.params.slug),
  isLogged: state.user.isLogged,
  userProfilId: state.user.userProfil.id,
  tagList: state.tag.list,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  registerActivity: (id, user) => {
    dispatch(registerActivity(id, user));
  },
  leftActivity: (id, user) => {
    dispatch(leftActivity(id, user));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailActivity);
