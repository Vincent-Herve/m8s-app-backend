import { SAVE_TAGS, CHANGE_TAG } from 'src/actions/tag';

export const initialState = {
  list: [],
  tagId: '',
};

const tag = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_TAGS:
      return {
        ...state,
        list: action.tag,
      };
    case CHANGE_TAG:
      return {
        ...state,
        tagId: action.tag,
      };
    default:
      return state;
  }
};

export default tag;
