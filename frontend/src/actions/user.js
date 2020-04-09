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

export const changeValue = (value, name) => ({
  type: CHANGE_VALUE,
  name,
  value,
});

export const redirection = () => ({
  type: REDIRECTION,
});

export const isLoading = () => ({
  type: IS_LOADING,
});

export const signin = () => ({
  type: SIGNIN,
});

export const saveUser = (userProfil) => ({
  type: SAVE_USER,
  id: userProfil.id,
  username: userProfil.username,
  firstname: userProfil.firstname,
  lastname: userProfil.lastname,
  email: userProfil.email,
  activities: userProfil.activities,
});

export const checkIsLogged = () => ({
  type: CHECK_IS_LOGGED,
});

export const signup = () => ({
  type: SIGNUP,
});

export const signout = () => ({
  type: SIGNOUT,
});

export const unsubscribe = () => ({
  type: UNSUBSCRIBE,
});

export const editProfil = () => ({
  type: EDIT_PROFIL,
});

export const updateUser = () => ({
  type: UPDATE_USER,
});

export const deleteUserActivity = (activities) => ({
  type: DELETE_USER_ACTIVITY,
  activities,
});

export const messageError = (message) => ({
  type: MESSAGE_ERROR,
  message,
});
