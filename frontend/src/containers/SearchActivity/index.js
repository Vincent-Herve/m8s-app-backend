// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import SearchActivity from 'src/components/SearchActivity';

// Action Creators
import { searchActivity, changeValue } from 'src/actions/activities';
import { changeTag } from 'src/actions/tag';

const mapStateToProps = (state, ownProps) => ({
  tagList: state.tag.list,
  location: state.activities.location,
  activities: state.activities.resultList,
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
});

// Container
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchActivity);
