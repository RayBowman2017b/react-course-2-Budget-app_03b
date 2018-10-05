
/*
  sec009a_CLS_edit_expense_page.jsx

import { CLS_edit_expense_page } from '../../sec009a_components/sec009a_CLS_edit_expense_page.jsx';

 */

import React from 'react';

import { connect } from 'react-redux';
import CLS_expense_form from "./sec011a_L105_expense_form.jsx";

import { MP_editExpense, MP_removeExpense } from "../sec011a_L099_actions/sec011a_L099_ACTN_expenses.jsx";

const xxxGC_edit_expense_page = (P_props) =>
(
  <div>This is from my edit expense component.</div>
);

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

        this.props.edit_expense (this.props.expense.id, P_expense);

        this.props.history.push ('/');
    };

    onClickRemoveExpense = (e) =>  {

        this.props.remove_expense ({ id: this.props.expense.id });
        this.props.history.push ('/');
    };


    render ()
    {
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

      <button id='BTN_remove_expense' onClick={this.onClickRemoveExpense}
      >REMOVE</button>

  </div>
           );
    }
}

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

const mapDispatchToProps = (dispatch) =>  {
  return (
  {
    edit_expense: (id, expense) => dispatch(MP_editExpense(id, expense)),
    remove_expense: (expense_id_obj) => dispatch(MP_removeExpense(expense_id_obj))
  }      );
};

export default connect(mapStateToProps, mapDispatchToProps)
                 (CLS_edit_expense_page);
