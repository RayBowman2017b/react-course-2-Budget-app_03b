
/***************************************************************************

sec016a_L162_auth.jsx

import { MP_start_login } from '../sec011a_L099_actions/sec016a_L162_auth.jsx';

//  SEC_016 --- 162. Login Page and Google Authentication 19:26

 ***************************************************************************/

import { firebase, MP_google_auth_provider } from '../sec014a_firebase/sec014_L142_firebase.js';

export const MP_start_login = () => {
    return () => {
        return firebase.auth().signInWithPopup(MP_google_auth_provider);
    };
};

