// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import CreateActivity from 'src/components/CreateActivity';

// Action Creators
import { createActivity, changeValue } from 'src/actions/activities';
import { changeTag } from 'src/actions/tag';

const mapStateToProps = (state, ownProps) => ({
  tagId: state.tag.list,
  tagValue: state.tag.tagId,
  title: state.activities.title,
  description: state.activities.description,
  free_place: state.activities.free_place,
  location: state.activities.location,
  date: state.activities.date,
  hour: state.activities.hour,
  isLoading: state.user.isLoading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleCreate: () => {
    dispatch(createActivity());
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
)(CreateActivity);
