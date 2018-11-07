
/***************************************************************************

sec016a_L162_login_page.jsx

//  SEC_016 --- 162. Login Page and Google Authentication 19:26

import MP_SFC_login_page from '../../sec009a_components/sec016a_L162_login_page.jsx';

 ***************************************************************************/

import React from 'react';

import moment from 'moment';

import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';

import { MP_start_login } from '../sec011a_L099_actions/sec016a_L162_ACTN_auth.jsx';

const GC_button_style =
{ padding: 0.2 + "rem", margin: 1 + "rem", float: "left", clear:"left" };

const GC_message_style =
{ padding: 0.2 + "rem", margin: 1 + "rem", top_margin: 7 + "rem", float: "left", clear:"right" };

const GC_testbox01_style =
{ padding: 0.2 + "rem", margin: 1 + "rem", top_margin: 7 + "rem", float: "left"};


const GC_link_with_children = (P_props) =>
(
    <button style={GC_button_style}>
    <NavLink
      to={P_props.route}
      activeClassName="is-active"
      exact={true}
    >{P_props.children}
    </NavLink>
  </button>
);

export const SFC_login_page = (P_props) => (
  <div className="box-layout">
<div className="box-layout__box">
  <h1 className="box-layout__title">Expensify</h1>
  <p>It's time to get your expenses under control.</p>
    <input
      type="text"
      placeholder="USERNAME"
      id="TXBX_username"
      style={GC_testbox01_style}
    />
    <input
      type="text"
      placeholder="PASSWORD"
      id="TXBX_password"
      style={GC_testbox01_style}
    />
    <button className="button" onClick={P_props.BTN_CLK_start_login}>
    Login with Google
    </button>
  {/*
    <GC_link_with_children route={"/dashboard/"}>
          <h3>{'TO > dashboard'}</h3>
    </GC_link_with_children>
    */}
  </div>
    </div>
);


const GF_map_dispatch_to_props = (P_dispatch) => ( {
    BTN_CLK_start_login: (P_login_obj) => P_dispatch(MP_start_login())
} );

export default connect(undefined, GF_map_dispatch_to_props) (SFC_login_page);
