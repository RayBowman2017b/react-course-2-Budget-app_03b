

/***************************************************************************

sec013a_L140_expenses_summary.jsx

K:\A01_Udemy\C023_Complete_React_Web_Dev\Budget-app\
src\sec009a_components\sec013a_L140_expenses_summary.jsx

import { SFC_expenses_summary } from '../../sec009a_components/sec013a_L140_expenses_summary.jsx';
          //[S07251667|sec009a_SFC_expense_dashboard_page.jsx::sec013a_L140_expenses_summary import-1;]

//  SEC_013 --- 140. Build It: Adding Summary Component 18:39

 ***************************************************************************/

import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import numeral from 'numeral';

import MP_SLCT_getVisibleExpenses from "../sec011a_L099_selectors/sec011a_L099_SLCT_expenses.jsx";
import MP_selectExpensesTotal from "../sec011a_L099_selectors/sec013a_L139_SLCT_total_expenses.jsx";

//==========================================================================

const SFC_expenses_summary=({ total_expense_count, total_expense_amount }) => {

    const expense_word = total_expense_count > 1 ? "expenses" : "expense";
    const total_expense_amount_formatted = numeral(total_expense_amount / 100).format("$0,0.00");

    return (
    <div className="page-header">
      <div className="content-container">
          {
            total_expense_count === 0 ? (
                <h1>No Expenses Selected</h1>
            ) : <h1 className="page-header__title">
                    Viewing <span>{total_expense_count} {expense_word} </span>
                    totalling <span>{total_expense_amount_formatted}</span></h1>
          }
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
          <Link className="button" to="/xpr">Experimental Page</Link>
        </div>
      </div>
    </div>
    )
};
//==========================================================================

const GF_map_state_to_props = (P_state) =>
{
    const expenses = MP_SLCT_getVisibleExpenses
                                           (P_state.expenses, P_state.filters);

    const total_expense_amount = MP_selectExpensesTotal (expenses);

    const total_expense_count = expenses.length;

    return {  total_expense_count, total_expense_amount };
};
//==========================================================================

export default connect (GF_map_state_to_props) (SFC_expenses_summary);
