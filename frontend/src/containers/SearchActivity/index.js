// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import SearchActivity from 'src/components/SearchActivity';

// Action Creators
import { searchActivity, changeValue, registerActivity, leftActivity } from 'src/actions/activities';
import { changeTag } from 'src/actions/tag';

const mapStateToProps = (state, ownProps) => ({
  tagId: state.tag.list,
  location: state.activities.location,
  activities: state.activities.resultList,
  userProfilId: state.user.userProfil.id,
  isLogged: state.user.isLogged,
  isLoading: state.user.isLoading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSearchActivity: () => {
    dispatch(searchActivity());
  },
  changeField: (value, name) => {
    dispatch(changeValue(value, name));
  },
  changeTag: (value) => {
    dispatch(changeTag(value));
  },
  registerActivity: (id, user) => {
    dispatch(registerActivity(id, user));
  },
  leftActivity: (id, user) => {
    dispatch(leftActivity(id, user));
  },
});
// Container
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchActivity);
