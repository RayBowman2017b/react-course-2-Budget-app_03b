
/*

  sec011a_L099_RDCR_expenses.jsx

 */

import { MP_expense_actions } from "../sec011a_L099_actions/sec011a_L099_ACTN_expenses.jsx";


const GC_expensesReducerDefaultState = [];

export default (P_state = GC_expensesReducerDefaultState, P_action) =>
{

    switch (P_action.type)
    {
        case MP_expense_actions.ACT_XP_ADD_EXPENSE:
            return [...P_state, P_action.expense];

        case MP_expense_actions.ACT_XP_REMOVE_EXPENSE:
            return P_state.filter ( ({ id }) => id !== P_action.id );


        case MP_expense_actions.ACT_XP_EDIT_EXPENSE:
            return P_state.map ( (expense) =>  {
                if (expense.id === P_action.id)  {
                    return {
                        ...expense,
                        ...P_action.updates
                    };
                }
                else
                    return expense;
            }
                               );
            
        case MP_expense_actions.ACT_XP_SET_EXPENSES:
            return P_action.expenses;

        default:
            return P_state;
    }
};

