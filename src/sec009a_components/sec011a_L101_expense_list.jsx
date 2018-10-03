
/*

sec011a_L101_expense_list.jsx

 */

import React from 'react';
import { connect } from 'react-redux';
import SFC_expense_list_item from "./sec011a_L102_expense_list_item.jsx";

import Loadable from 'react-loadable';
//import { MP_common_loading_handler } from "../Utilities_01/Loadable_Handlers.jsx";

const Loading_02 = (P_props) =>
{
  if (P_props.error) {
//    return <div>Error! <button onClick={ P_props.retry }>Retry</button></div>;
    console.log (`P_props.error is ${P_props.error}`);
    return <div>Error! </div>;
  } else if (P_props.timedOut) {
//    return <div>Taking a long time... <button onClick={ P_props.retry }>Retry</button></div>;
    return <div>Taking a long time... </div>;
  } else if (P_props.pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
   <div>Loading...</div>;
}

//import MP_SLCT_getVisibleExpenses from "../sec011a_L099_selectors/sec011a_L099_SLCT_expenses.jsx";


const MP_SLCT_getVisibleExpenses = Loadable({
 loader: () => import('../sec011a_L099_selectors/sec011a_L099_SLCT_expenses.jsx'),
 loading: Loading_02,
 //timeout: 10000, // 10 seconds
 timeout: 3000, // 3 seconds
});


let cnt = 0;

export const SFC_expense_list = (P_props) => (
<div>
  <h1>Expense List</h1>
  {
    P_props.expenses.length === 0 ? (
        <p>No Expenses</p>
    ) : (
        P_props.expenses.map ( (P_expense) => (
           <SFC_expense_list_item key={P_expense.id} {...P_expense} />
                                              )
                             )
    )
  }
</div>
    );

const GC_map_state_to_props = (P_state) =>  {
    return {
            expenses: MP_SLCT_getVisibleExpenses
                         (P_state.expenses, P_state.filters)
           };
};


export default connect (GC_map_state_to_props)(SFC_expense_list);
