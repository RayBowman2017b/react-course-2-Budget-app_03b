
/***************************************************************************

sec016a_L166_private_app_router.jsx

import MP_SFC_private_route from './sec016a_L166_private_app_router.jsx';

//  SEC_016 --- 166. Private Only Routes 13:04

 ***************************************************************************/

import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import Loadable from 'react-loadable';

import { MP_common_loading_handler } from "../Utilities_01/Loadable_Handlers.jsx";

import SFC_header from '../sec009a_components/sec009a_SFC_header.jsx';

export const MP_SFC_private_route = ( {
    isAuthenticated,
    component: P_Component,
    ...rest
} ) => (
    <Route {...rest} component={ (props) => (
        isAuthenticated ? (
            <div>
                <SFC_header />
                <P_Component {...props} />
            </div>
        ) : (
            <Redirect to="/" />
        )
        ) }
    />
);

const GF_map_state_to_props = (P_state) => ( {
    isAuthenticated: !! P_state.auth.uid
} );

export default connect (GF_map_state_to_props) (MP_SFC_private_route);
