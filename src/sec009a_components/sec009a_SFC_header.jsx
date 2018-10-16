
/*
  sec009a_SFC_header.jsx

import MP_header from '../../sec009a_components/sec009a_SFC_header.jsx';
*/

import React from 'react';

import { NavLink } from 'react-router-dom';


// const GC_link = (P_props) =>
// (
//   <div>
//     <NavLink
//       to={P_props.route}
//       activeClassName="is-active"
//       exact={true}
//     >{P_props.message}
//     </NavLink>
//   </div>
// );

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

const GC_header = () =>
(
<header>
  <h1>Expensify</h1>
  <GF_link route="/" message="HOME" />
  <GF_link route="/create" message="Create Expense" />
  <GF_link route="/edit" message="Edit" />
</header>
);

export default GC_header;
