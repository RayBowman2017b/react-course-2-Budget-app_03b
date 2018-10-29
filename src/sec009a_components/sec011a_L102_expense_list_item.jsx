
/*

sec011a_L102_expense_list_item.jsx

*/

import React from 'react';

import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';


//  SEC_013 --- 138. New Feature Workflow 12:32
import moment from 'moment';

//  SEC_013 --- 138. New Feature Workflow 12:32
import numeral from 'numeral';


const out = (P_id) => console.log (P_id);


const GC_link_with_children = (P_props) =>
(
  <div>
    <NavLink
      to={P_props.route}
      activeClassName="is-active"
      exact={true}
    >{P_props.children}
    </NavLink>
  </div>
);
//      <p> {amount} - {createdAt}</p>
    // <div style={{paddingLeft: "6rem"}}>

let ctr = 1;

export const SFC_expense_list_item = ({ id, description, amount, createdAt }) => (
    <div key={ctr++}>
      <GC_link_with_children route={"/edit/" + id}>
          <h3>{`TO > ${description}`}</h3>
      </GC_link_with_children>
    <div >
      <p>
        {numeral(amount / 100).format("$0,0.00")} --- {moment(createdAt).format ("MMMM Do, YYYY")}
      </p>
    </div>
    </div>
);

export default SFC_expense_list_item;
