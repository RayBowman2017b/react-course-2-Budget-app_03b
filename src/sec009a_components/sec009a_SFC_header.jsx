
/*
  sec009a_SFC_header.jsx

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_009_React_Router\proj_02\Budget-app\src\sec009a_components\sec009a_SFC_header.jsx


//  SEC_009 --- 80. Organizing Our Routes 12:30

import MP_header from '../../sec009a_components/sec009a_SFC_header.jsx';

*/

import React from 'react';

import { NavLink } from 'react-router-dom';


const GC_link = (P_props) =>
(
  <div>
    <NavLink
      to={P_props.route}
      activeClassName="is-active"
      exact={true}
    >{P_props.message}
    </NavLink>
  </div>
);

const GC_header = () =>
(
<header>
  <h1>Expensify</h1>
  <GC_link route="/" message="HOME" />
  <GC_link route="/create" message="Create Expense" />
  <GC_link route="/edit" message="Edit" />
</header>
);


//  SEC_012 --- 118. Snapshot Testing 12:13
//  <GC_link route="/help" message="Help" />

export default GC_header;
