
/*

  sec009a_CLS_add_expense_page.jsx

//  SEC_009 --- 80. Organizing Our Routes 12:30

//  SEC_011 --- 105. Creating Expense Add/Edit Form 20:09

import { CLS_add_expense_page } from '../../sec009a_components/sec009a_CLS_add_expense_page.jsx';

 */

import React from 'react';
import { connect } from 'react-redux';

import CLS_expense_form from "./sec011a_L105_expense_form.jsx";
import { MP_addExpense } from "../sec011a_L099_actions/sec011a_L099_ACTN_expenses.jsx";


//  SEC_012 --- 124. Testing AddExpensePage 14:39

export class CLS_add_expense_page extends React.Component
{
    constructor (P_props)
    {
      super(P_props);
    }

        onExpenseSubmit = (P_expense) => {
            //console.log ('GC_add_expense_page ', P_expense);
//  SEC_012 --- 124. Testing AddExpensePage 14:39
//            props.dispatch ( MP_addExpense(P_expense) );

            this.props.add_expense (P_expense);

            this.props.history.push ('/');
        };


  render ()  {
    return (
  <div>
      <div>This is from my add expense component.</div>
      <h1>Add Expense</h1>
      <CLS_expense_form
        onExpenseSubmit={this.onExpenseSubmit}
        buttonLabel={'ADD EXPENSE'}
      />
  </div>
      );
    }

}

/***********************************************************
//  SEC_011 --- 105. Creating Expense Add/Edit Form 20:09

const GC_add_expense_page = (props) => (
  <div>
      <div>This is from my add expense component.</div>
      <h1>Add Expense</h1>
      <CLS_expense_form
        onExpenseSubmit={ (expense) => {
            //console.log ('GC_add_expense_page ', expense);
//  SEC_012 --- 124. Testing AddExpensePage 14:39
//            props.dispatch ( MP_addExpense(expense) );
            props.add_expense (expense);
            props.history.push ('/');
        } } />
  </div>
);
 ***********************************************************/


//  SEC_012 --- 124. Testing AddExpensePage 14:39

const GC_mapDispatchToProps = (P_dispatch) => ( {
    add_expense: (P_expense) => P_dispatch(MP_addExpense(P_expense))
} );
//export default connect() (GC_add_expense_page);
export default connect(undefined, GC_mapDispatchToProps) (CLS_add_expense_page);
