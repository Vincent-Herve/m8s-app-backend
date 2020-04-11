export const SAVE_TAGS = 'SAVE_TAGS';
export const CHANGE_TAG = 'CHANGE_TAG';

// Save all tags after fetch
export const saveTags = (tag) => ({
  type: SAVE_TAGS,
  tag,
});

// controlled field in component ==> CreateActivity, SearchActivity
export const changeTag = (tag) => ({
  type: CHANGE_TAG,
  tag,
});
