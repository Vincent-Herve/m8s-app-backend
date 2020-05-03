export const CHANGE_VALUE = 'CHANGE_VALUE';
export const SIGNIN = 'SIGNIN';
export const SAVE_USER = 'SAVE_USER';
export const CHECK_IS_LOGGED = 'CHECK_IS_LOGGED';
export const REDIRECTION = 'REDIRECTION';
export const IS_LOADING = 'IS_LOADING';
export const SIGNUP = 'SIGNUP';
export const SIGNOUT = 'SIGNOUT';
export const UNSUBSCRIBE = 'UNSUBSCRIBE';
export const EDIT_PROFIL = 'EDIT_PROFIL';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER_ACTIVITY = 'DELETE_USER_ACTIVITY';
export const MESSAGE_ERROR = 'MESSAGE_ERROR';
export const GET_RESET_PASSWORD = 'GET_RESET_PASSWORD';
export const PATCH_RESET_PASSWORD = 'PATCH_RESET_PASSWORD';
export const SET_RESET = 'SET_RESET';

// controlled field in component ==> Signup, Signin, EditProfil
export const changeValue = (value, name) => ({
  type: CHANGE_VALUE,
  name,
  value,
});

// redirection used in case ajaxMiddleware ==> SIGNIN, SIGNUP, SIGNOUT, UNSUBSCRIBE, EDIT_PROFIL
export const redirection = () => ({
  type: REDIRECTION,
});

// isLoading used in case ajaxMiddleware ==> SIGNIN, SIGNUP, EDIT_PROFIL, SEARCH_ACTIVITY
export const isLoading = () => ({
  type: IS_LOADING,
});

// action ajaxMiddleware signin
export const signin = () => ({
  type: SIGNIN,
});

// action reducer/user saveUser
export const saveUser = (userProfil) => ({
  type: SAVE_USER,
  id: userProfil.id,
  username: userProfil.username,
  firstname: userProfil.firstname,
  lastname: userProfil.lastname,
  email: userProfil.email,
});

// action ajaxMiddleware checkIsLogged
export const checkIsLogged = () => ({
  type: CHECK_IS_LOGGED,
});

// action ajaxMiddleware signup
export const signup = () => ({
  type: SIGNUP,
});

// action ajaxMiddleware and reducer/user signout
export const signout = () => ({
  type: SIGNOUT,
});

// action ajaxMiddlewate unsubscribe
export const unsubscribe = () => ({
  type: UNSUBSCRIBE,
});

// action ajaxMiddleware editProfil
export const editProfil = () => ({
  type: EDIT_PROFIL,
});

// action reducer/user updateUser, remount app for refresh reducer/activities/list with action fetchActivities
export const updateUser = () => ({
  type: UPDATE_USER,
});


// action reducer/user deleteUserActivity, remount app for refresh reducer/activities/list with action fetchActivities
export const deleteUserActivity = (activities) => ({
  type: DELETE_USER_ACTIVITY,
  activities,
});

// action reducer/user messageError, used in case ajaxMiddleware SIGNUP, SIGNIN
export const messageError = (message) => ({
  type: MESSAGE_ERROR,
  message,
});

export const getResetPassword = (token) => ({
  type: GET_RESET_PASSWORD,
  token,
});

export const patchResetPassword = (token) => ({
  type: PATCH_RESET_PASSWORD,
  token,
});

export const setReset = (bool) => ({
  type: SET_RESET,
  bool,
});
