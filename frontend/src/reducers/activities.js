import {
  SAVE_ACTIVITIES, CHANGE_VALUE, SAVE_RESULT, REDIRECTION_CREATE,
} from 'src/actions/activities';

export const initialState = {
  list: [],
  resultList: [],
  redirectionCreate: false,
  isLoading: true,
  title: '',
  description: '',
  free_place: '',
  location: '',
  date: '',
  hour: '',
};

const activities = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_ACTIVITIES:
      return {
        ...state,
        list: action.activities,
        isLoading: false,
      };
    case SAVE_RESULT:
      return {
        ...state,
        resultList: action.activities,
      };
    case REDIRECTION_CREATE:
      return {
        ...state,
        redirectionCreate: !state.redirectionCreate,
        title: '',
        description: '',
        free_place: '',
        location: '',
        date: '',
        hour: '',
      };
    default:
      return state;
  }
};

export default activities;
