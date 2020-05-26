import axios from 'axios';

import {
  SIGNUP,
  SIGNIN,
  SIGNOUT,
  saveUser,
  redirection,
  isLoading,
  CHECK_IS_LOGGED,
  UNSUBSCRIBE,
  signout,
  EDIT_PROFIL,
  updateUser,
  deleteUserActivity,
  messageError,
  GET_RESET_PASSWORD,
  setReset,
  PATCH_RESET_PASSWORD,
  GET_VERIFY_ACCOUNT,
  setIsVerified,
} from 'src/actions/user';

import {
  FETCH_ACTIVITIES,
  saveActivities,
  CREATE_ACTIVITY,
  REGISTER_ACTIVITY,
  LEFT_ACTIVITY,
  SEARCH_ACTIVITY,
  redirectionCreate,
  saveResult,
} from '../actions/activities';

import { saveTags } from '../actions/tag';

const ajaxMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SIGNIN: {
      const state = store.getState();
      const { email, password } = state.user;
      axios.post('http://localhost:3000/api/auth/signin', {
        email,
        password,
      }, {
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(messageError(''));
          store.dispatch(isLoading());
          setTimeout(() => {
            store.dispatch(isLoading());
            store.dispatch(redirection());
            store.dispatch(saveUser(response.data.info));
          }, 3000);
        })
        .catch((errors) => {
          console.error(errors.message);
          store.dispatch(messageError('Email ou mot de passe incorrect'));
        });
      next(action);
      break;
    }
    case SIGNUP: {
      const state = store.getState();
      const {
        username,
        firstname,
        lastname,
        email,
        password,
        passwordConfirm,
      } = state.user;

      axios.post('http://localhost:3000/api/auth/signup', {
        username,
        firstname,
        lastname,
        email,
        password,
        passwordConfirm,
      })
        .then(() => {
          store.dispatch(isLoading());
          setTimeout(() => {
            store.dispatch(isLoading());
            store.dispatch(redirection());
            store.dispatch(messageError(''));
          }, 3000);
        })
        .catch((error) => {
          console.error(error);
          store.dispatch(messageError('Email ou pseudo déjà existant'));
        });
      next(action);
      break;
    }

    case SIGNOUT: {
      axios.post('http://localhost:3000/api/auth/disconnect', {
      }, {
        withCredentials: true,
      })
        .then(() => {
          store.dispatch(redirection());
        })
        .catch((error) => {
          console.error(error);
        });

      next(action);
      break;
    }

    case CHECK_IS_LOGGED:
      axios.post('http://localhost:3000/api/auth/isLogged', {}, {
        withCredentials: true,
      })
        .then((response) => {
          // si l'user est connecté
          if (response.data.logged) {
            // alors je le mémorise
            store.dispatch(saveUser(response.data.info.user));
          }
        })
        .catch((error) => {
          // console.error(error);
        });
      break;

    case UNSUBSCRIBE: {
      const state = store.getState();
      const { userProfil } = state.user;
      axios.delete(`http://localhost:3000/api/unsubscribe/${userProfil.id}`, {
      })
        .then((response) => {
          if (response.data.finally) {
            store.dispatch(signout());
            store.dispatch(redirection());
          }
        })
        .catch((error) => {
          console.error(error);
        });

      next(action);
      break;
    }
    case EDIT_PROFIL: {
      const state = store.getState();
      const {
        email, password, userProfil, username, firstname, lastname,
      } = state.user;
      const newEmail = (email !== '' ? email : userProfil.email);
      const newUsername = (username !== '' ? username : userProfil.username);
      const newFirstname = (firstname !== '' ? firstname : userProfil.firstname);
      const newLastname = (lastname !== '' ? lastname : userProfil.lastname);
      const newUserProfil = {
        ...userProfil,
        email: newEmail,
        username: newUsername,
        firstname: newFirstname,
        lastname: newLastname,
      };
      axios.patch(`http://localhost:3000/api/profil/${userProfil.id}`, {
        email,
        password,
        firstname,
        lastname,
        username,
      })
        .then(() => {
          store.dispatch(isLoading());
          setTimeout(() => {
            store.dispatch(isLoading());
            store.dispatch(redirection());
            store.dispatch(saveUser(newUserProfil));
          }, 3000);
        })
        .catch((error) => {
          console.error(error);
        });
      next(action);
      break;
    }
    case FETCH_ACTIVITIES: {
      axios.all([
        axios.get('http://localhost:3000/api/activity'),
        axios.get('http://localhost:3000/api/tag'),
      ])
        .then(axios.spread((activities, tags) => {
          // do something with both responses
          setTimeout(() => {
            store.dispatch(saveTags(tags.data));
            store.dispatch(saveActivities(activities.data));
          }, 500);
        }));

      next(action);
      break;
    }
    case CREATE_ACTIVITY: {
      const state = store.getState();
      const { userProfil } = state.user;
      const userId = userProfil.id;
      const {
        title,
        description,
        // eslint-disable-next-line camelcase
        free_place,
        location,
        date,
        hour,
      } = state.activities;
      const { tagId } = state.tag;
      axios.post('http://localhost:3000/api/activity', {
        title,
        description,
        free_place,
        location,
        date,
        hour,
        tagId,
        userId,
      })
        .then(() => {
          store.dispatch(isLoading());
          setTimeout(() => {
            store.dispatch(isLoading());
            store.dispatch(redirectionCreate());
          }, 1500);
        })
        .catch((error) => {
          console.error(error);
        });
      next(action);
      break;
    }

    case REGISTER_ACTIVITY: {
      // eslint-disable-next-line prefer-destructuring
      const userId = action.user;
      axios.post(`http://localhost:3000/api/activity/${action.id}/user`, {
        userId,
      })
        .then(() => {
          store.dispatch(updateUser());
        })
        .catch((error) => {
          console.error(error);
        });
      next(action);
      break;
    }

    case LEFT_ACTIVITY: {
      // eslint-disable-next-line prefer-destructuring
      axios.delete(`http://localhost:3000/api/activity/${action.id}/user/${action.user}`, {
      })
        .then(() => {
          store.dispatch(deleteUserActivity());
        })
        .catch((error) => {
          console.error(error);
        });
      next(action);
      break;
    }

    case SEARCH_ACTIVITY: {
      const state = store.getState();
      const { location } = state.activities;
      const { tagId } = state.tag;
      const tag = tagId;
      axios.post('http://localhost:3000/api/activity/search', {
        location,
        tag,
      })
        .then((response) => {
          store.dispatch(isLoading());
          setTimeout(() => {
            store.dispatch(isLoading());
            store.dispatch(saveResult(response.data));
          }, 1500);
        })
        .catch((error) => {
          console.error(error);
        });
      next(action);
      break;
    }

    case GET_RESET_PASSWORD: {
      const { token } = action;
      axios.post('http://localhost:3000/api/reset-password', {
        token,
      })
        .then((response) => {
          if (response.data.reset) {
            store.dispatch(setReset(true));
          }
        })
        .catch((error) => {
          store.dispatch(setReset(false));
        });
      next(action);
      break;
    }

    case PATCH_RESET_PASSWORD: {
      const state = store.getState();
      const { password, passwordConfirm } = state.user;
      const { token } = action;
      axios.patch('http://localhost:3000/api/reset-password', {
        token,
        password,
        passwordConfirm,
      })
        .then(() => {
          store.dispatch(isLoading());
          setTimeout(() => {
            store.dispatch(isLoading());
            store.dispatch(redirection());
          }, 1500);
        })
        .catch((error) => {
          console.error(error);
          store.dispatch(messageError('Demande de réinitialisation de mot de passe expirée ou invalide.'));
        });
      next(action);
      break;
    }

    case GET_VERIFY_ACCOUNT: {
      const { token } = action;
      axios.post('http://localhost:3000/api/verify-account', {
        token,
      })
        .then((response) => {

          if (response.data.isVerified) {
            store.dispatch(setIsVerified(true));
          }
        })
        .catch((error) => {
          store.dispatch(setIsVerified(false));
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default ajaxMiddleware;
