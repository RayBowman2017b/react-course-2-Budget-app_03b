
/***************************************************************************

sec013a_L139_SLCT_total_expenses.jsx

K:\A01_Udemy\Budget-app_03\src\sec011a_L099_selectors\sec013a_L139_SLCT_total_expenses.jsx

//  SEC_013 --- 139. Build It: Adding Total Selector 17:25

import MP_selectExpensesTotal from "../../sec011a_L099_selectors/sec013a_L139_SLCT_total_expenses.jsx";

 ***************************************************************************/

export default (P_expenses) => {
    if ( ! P_expenses ) throw new Error ("   *** passed parameter is null/undefined");
    if ( ! Array.isArray (P_expenses) )  throw new Error ("   *** passed parameter is not an array");

    if ( (P_expenses.length === 1) && (typeof P_expenses[0].amount !== "number") )
        throw new Error ("   *** There is no object with an expense element.");

    const LF_get_amount = (P_expense) => (typeof P_expense.amount === 'number') ? P_expense.amount : 0;
    return P_expenses.reduce( (acum, expense) => acum + LF_get_amount(expense), 0 );
}


