
/***************************************************************************

sec016a_L167_public_app_router.jsx

import MP_SFC_public_route from './sec016a_L167_public_app_router.jsx';

//  SEC_016 --- 167. Public Only Routes 5:29

 ***************************************************************************/

import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


class CLS_public_route_error_boundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log ("error", error);
    console.log ("info", info);
    this.setState ( (P_prev_state, P_props) => ( {
        error : error,
        info : info
    } ) );
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
            <h1>Something went wrong.</h1>;
            <h1>{this.state.error}</h1>;
            <h1>{this.state.info}</h1>;
        </div>
      );
    }

    return this.props.children; 
  }
}

export const MP_SFC_public_route = ( {
    isAuthenticated,
    component: P_Component,
    ...rest
} ) => (
    <Route {...rest} component={ (props) => (
        isAuthenticated ? (
            <CLS_public_route_error_boundary>
                <Redirect to="/dashboard" />
            </CLS_public_route_error_boundary>
        ) : (
            <CLS_public_route_error_boundary>
                <P_Component {...props} />
            </CLS_public_route_error_boundary>
        )
        ) }
    />
);

const GF_map_state_to_props = (P_state) => ( {
    isAuthenticated: !! P_state.auth.uid
} );

export default connect (GF_map_state_to_props) (MP_SFC_public_route);
