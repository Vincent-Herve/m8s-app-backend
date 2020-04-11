export const SAVE_ACTIVITIES = 'SAVE_ACTIVITIES';
export const FETCH_ACTIVITIES = 'FETCH_ACTIVITIES';
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const REGISTER_ACTIVITY = 'REGISTER_ACTIVITY';
export const SEARCH_ACTIVITY = 'SEARCH_ACTIVITY';
export const LEFT_ACTIVITY = 'LEFT_ACTIVITY';
export const SAVE_RESULT = 'SAVE_RESULT';
export const REDIRECTION_CREATE = 'REDIRECTION_CREATE';

// Save all activities after fetch
export const saveActivities = (activities) => ({
  type: SAVE_ACTIVITIES,
  activities,
});

// Fetch all activities with axios
export const fetchActivities = () => ({
  type: FETCH_ACTIVITIES,
});

// action ajaxMiddleware createActivity
export const createActivity = () => ({
  type: CREATE_ACTIVITY,
});


// controlled field in component ==> CreateActivity, SearchActivity
export const changeValue = (value, name) => ({
  type: CHANGE_VALUE,
  name,
  value,
});


// action ajaxMiddleware User register to one activity
export const registerActivity = (id, user) => ({
  type: REGISTER_ACTIVITY,
  id,
  user,
});

// action ajaxMiddleware User left activity
export const leftActivity = (id, user) => ({
  type: LEFT_ACTIVITY,
  id,
  user,
});


// action ajaxMiddleware, fetch activity by search
export const searchActivity = () => ({
  type: SEARCH_ACTIVITY,
});


// save result from search activity axios request to reducers/activities/state/resultList
export const saveResult = (activities) => ({
  type: SAVE_RESULT,
  activities,
});

// redirection to /activity page after create activity
export const redirectionCreate = () => ({
  type: REDIRECTION_CREATE,
});
