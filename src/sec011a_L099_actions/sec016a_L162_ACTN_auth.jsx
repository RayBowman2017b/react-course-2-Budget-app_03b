
/***************************************************************************

sec016a_L162_ACTN_auth.jsx

//  SEC_016 --- 163. Logging Out 11:05
import { MP_auth_actions, MP_start_login, MP_start_logout } from '../sec011a_L099_actions/sec016a_L162_ACTN_auth.jsx';
import { MP_login, MP_logout } from '../sec011a_L099_actions/sec016a_L162_ACTN_auth.jsx';

//  SEC_016 --- 162. Login Page and Google Authentication 19:26

MP_auth_actions.ACT_AUTH_login
MP_auth_actions.ACT_AUTH_logout

 ***************************************************************************/

import { firebase, MP_google_auth_provider }
  from '../sec014a_firebase/sec014_L142_firebase.js';


export const MP_auth_actions =
{
  ACT_AUTH_login:      'LOGIN',
  ACT_AUTH_logout:     'LOGOUT'
};

export const MP_login = (P_uid) => ({
    type: MP_auth_actions.ACT_AUTH_login,
    uid: P_uid
});

export const MP_start_login = () => {
    return () => {
        return firebase.auth().signInWithPopup(MP_google_auth_provider);
    };
};

export const MP_logout = () => ({
    type: MP_auth_actions.ACT_AUTH_logout
});

export const MP_start_logout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};
