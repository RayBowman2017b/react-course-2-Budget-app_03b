
/***************************************************************************

sec016a_L165_RDCR_auth.jsx

//  SEC_016 --- 165. The Auth Reducer 15:49

MP_auth_actions.ACT_AUTH_login
MP_auth_actions.ACT_AUTH_logout

 ***************************************************************************/

import { MP_auth_actions } from '../sec011a_L099_actions/sec016a_L162_ACTN_auth.jsx';

export default (P_state = {}, P_action) => {
    switch (P_action.type) {
        case (MP_auth_actions.ACT_AUTH_login):
            return {
                uid: P_action.uid
            };
        case (MP_auth_actions.ACT_AUTH_logout):
            return {};
        default: return P_state;
    };
};
