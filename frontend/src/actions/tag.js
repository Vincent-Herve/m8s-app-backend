export const SAVE_TAGS = 'SAVE_TAGS';
export const CHANGE_TAG = 'CHANGE_TAG';

export const saveTags = (tag) => ({
  type: SAVE_TAGS,
  tag,
});

export const changeTag = (tag) => ({
  type: CHANGE_TAG,
  tag,
});
