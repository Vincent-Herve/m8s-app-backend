export const SAVE_ACTIVITIES = 'SAVE_ACTIVITIES';
export const FETCH_ACTIVITIES = 'FETCH_ACTIVITIES';
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const REGISTER_ACTIVITY = 'REGISTER_ACTIVITY';
export const SEARCH_ACTIVITY = 'SEARCH_ACTIVITY';
export const LEFT_ACTIVITY = 'LEFT_ACTIVITY';
export const SAVE_RESULT = 'SAVE_RESULT';
export const REDIRECTION_CREATE = 'REDIRECTION_CREATE';

export const saveActivities = (activities) => ({
  type: SAVE_ACTIVITIES,
  activities,
});

export const fetchActivities = () => ({
  type: FETCH_ACTIVITIES,
});

export const createActivity = () => ({
  type: CREATE_ACTIVITY,
});

export const changeValue = (value, name) => ({
  type: CHANGE_VALUE,
  name,
  value,
});

export const registerActivity = (id, user) => ({
  type: REGISTER_ACTIVITY,
  id,
  user,
});

export const leftActivity = (id, user) => ({
  type: LEFT_ACTIVITY,
  id,
  user,
});

export const searchActivity = () => ({
  type: SEARCH_ACTIVITY,
});

export const saveResult = (activities) => ({
  type: SAVE_RESULT,
  activities,
});

export const redirectionCreate = () => ({
  type: REDIRECTION_CREATE,
});
