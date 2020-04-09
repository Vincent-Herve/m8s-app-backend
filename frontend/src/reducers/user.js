import {
  CHANGE_VALUE,
  SAVE_USER,
  SIGNOUT,
  REDIRECTION,
  IS_LOADING,
  UPDATE_USER,
  DELETE_USER_ACTIVITY,
  MESSAGE_ERROR,
} from 'src/actions/user';

export const initialState = {
  redirection: false,
  isLoading: false,
  reload: false,
  messageError: '',
  userProfil: {
    id: 0,
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    activities: '',
  },
  username: '',
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  passwordConfirm: '',
  isLogged: false,
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_USER:
      return {
        ...state,
        isLogged: true,
        userProfil: {
          id: action.id,
          username: action.username,
          firstname: action.firstname,
          lastname: action.lastname,
          email: action.email,
          activities: action.activities,
        },
      };
    case SIGNOUT:
      return {
        ...state,
        isLogged: false,
        userProfil: {
          id: '',
          username: '',
          firstname: '',
          lastname: '',
          email: '',
          activities: [],
        },
      };
    case REDIRECTION:
      return {
        ...state,
        redirection: !state.redirection,
        username: '',
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        passwordConfirm: '',
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case UPDATE_USER:
      return {
        ...state,
        reload: !state.reload,
      };
    case DELETE_USER_ACTIVITY:
      return {
        ...state,
        reload: !state.reload,
      };
    case MESSAGE_ERROR:
      return {
        ...state,
        messageError: action.message,
      };
    default:
      return state;
  }
};

export default user;
