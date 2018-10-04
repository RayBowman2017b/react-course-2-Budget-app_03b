
/*

  sec009a_CLS_edit_expense_page.jsx


//  SEC_009 --- 80. Organizing Our Routes 12:30

//  SEC_012 --- 125. Testing EditExpensePage 19:00

import { CLS_edit_expense_page } from '../../sec009a_components/sec009a_CLS_edit_expense_page.jsx';

 */

import React from 'react';

//  SEC_011 --- 108. Wiring up Edit Expense 19:06
import { connect } from 'react-redux';
import CLS_expense_form from "./sec011a_L105_expense_form.jsx";

//  SEC_012 --- 125. Testing EditExpensePage 19:00
//import { MP_editExpense } from "../sec011a_L099_actions/sec011a_L099_ACTN_expenses.jsx";
import { MP_editExpense, MP_removeExpense } from "../sec011a_L099_actions/sec011a_L099_ACTN_expenses.jsx";

const xxxGC_edit_expense_page = (P_props) =>
(
  <div>This is from my edit expense component.</div>
);

//  SEC_012 --- 125. Testing EditExpensePage 19:00

export class CLS_edit_expense_page extends React.Component
{
    constructor (P_props)
    {
      super(P_props);
    }

    log_props = (P_expense) =>  {
            console.log ('updated', P_expense);
            if (this.props.expense)
              console.log ('this.props.expense', this.props.expense);
            else
              console.log ('this.props.expense  xxxxxxx' );
            console.log('this.props', this.props);
            console.log('this.props.state_expenses', this.props.state_expenses);
            console.log ('updated', P_expense);
    }

    onExpenseSubmit = (P_expense) =>  {

        //this.log_props(P_expense);

        this.props.edit_expense (this.props.expense.id, P_expense);

        this.props.history.push ('/');
    };

    onClickRemoveExpense = (e) =>  {

        //this.props.dispatch ( MP_removeExpense({ id: this.props.expense.id }) );

        this.props.remove_expense ({ id: this.props.expense.id });
        this.props.history.push ('/');
    };


    render ()
    {
//    <div>Editing the expense with an id of {this.props.match.params.id}.</div>
//    <div>Editing the expense with an id of {this.props.expense.id}.</div>
    return (
  <div>
    <br/>
    <div>Editing the expense with an id of {this.props.match.params.id}.</div>
    <br/>
    <CLS_expense_form
        expense={this.props.expense}
        onExpenseSubmit={this.onExpenseSubmit}
        buttonLabel={'EDIT EXPENSE'}
    />

  {/*  //  SEC_011 --- 108. Wiring up Edit Expense 19:06 
        MOVED to here from  sec011a_L102_expense_list_item.jsx */}
      <button id='BTN_remove_expense' onClick={this.onClickRemoveExpense}
      >REMOVE</button>

  </div>
           );
    }
}

/************************************************************
const GC_edit_expense_page = (P_props) =>
{
    // console.log (P_props);

    return (
  <div>
    <div>Editing the expense with an id of {P_props.match.params.id}.</div>
    <CLS_expense_form
        expense={P_props.expense}
        onExpenseSubmit={ (P_expense) => {
            console.log ('updated', P_expense);
            P_props.dispatch ( MP_editExpense(P_props.expense.id, P_expense) );
            P_props.history.push ('/');
        } }
    />

  {/*  //  SEC_011 --- 108. Wiring up Edit Expense 19:06 
        MOVED to here from  sec011a_L102_expense_list_item.jsx * }
      <button onClick={ (e) => {
              P_props.dispatch ( MP_removeExpense({ id: P_props.expense.id }) );
              P_props.history.push ('/');
                      }        }
      >REMOVE</button>
  </div>
           );
}
 ************************************************************/

const match_props = (P_expense, P_props) =>  {
  console.log('P_props.match.params', P_props.match.params);
  console.log('P_expense', P_expense);
  return P_expense.id === P_props.match.params.id;
}

const mapStateToProps = (state, props) =>  {
      return (
      {
          expense: state.expenses.find (
            (P_expense) => P_expense.id === props.match.params.id
                   )
      }      );
    };

//  SEC_011 --- 108. Wiring up Edit Expense 19:06
//export default GC_edit_expense_page;
//  SEC_012 --- 125. Testing EditExpensePage 19:00

const mapDispatchToProps = (dispatch) =>  {
  return (
  {
    edit_expense: (id, expense) => dispatch(MP_editExpense(id, expense)),
    remove_expense: (expense_id_obj) => dispatch(MP_removeExpense(expense_id_obj))
  }      );
};
//export default connect() (GC_add_expense_page);
export default connect(mapStateToProps, mapDispatchToProps)
                 (CLS_edit_expense_page);
