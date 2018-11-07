
/*
  sec009a_SFC_header.jsx

import MP_header from '../../sec009a_components/sec009a_SFC_header.jsx';
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { MP_start_logout } from '../sec011a_L099_actions/sec016a_L162_ACTN_auth.jsx';

/***************************************************************************

const GF_link=(P_props) =>
    (
    <button style={{ padding: 1 + "rem", margin: 1 + "rem" }}>
    <NavLink
      to={P_props.route}
      activeClassName="is-active"
      exact={true}
    >{P_props.message}
    </NavLink>
  </button>
);

const SFC_header = (props) =>
(
<header>
  <h1>Expensify</h1>
  <GF_link route="/dashboard" message="Dashboard" />
  <GF_link route="/create" message="Create Expense" />
  <GF_link route="/edit" message="Edit" />
  <button id='BTN_logout' onClick={props.BTN_CLK_start_logout}>
    LOGOUT
  </button>
</header>
);
 ***************************************************************************/

export const SFC_header = (P_props) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Expensify</h1>
        </Link>
        <button id='BTN_logout'
                className="button button--link"
                onClick={P_props.BTN_CLK_start_logout}>
          LOGOUT
        </button>
      </div>
    </div>
  </header>
);

const GF_map_dispatch_to_props = (P_dispatch) => ( {
  BTN_CLK_start_logout: () => P_dispatch(MP_start_logout())
} );

export default connect(undefined, GF_map_dispatch_to_props) (SFC_header);
