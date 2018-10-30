
/*

  sec011a_L099_ACTN_expenses.jsx

 */

import MP_database from '../sec014a_firebase/sec014_L142_firebase.js';

import uuid from 'uuid';

//=====================================================================

export const MP_expense_actions =
{
  ACT_XP_ADD_EXPENSE:      'ADD_EXPENSE',
  ACT_XP_REMOVE_EXPENSE:   'REMOVE_EXPENSE',
  ACT_XP_EDIT_EXPENSE:     'EDIT_EXPENSE',
  ACT_XP_SET_EXPENSES:     'SET_EXPENSES'
};
//=====================================================================

export const MP_addExpense = (expense) => (
        {
            type: MP_expense_actions.ACT_XP_ADD_EXPENSE,
            expense
        }
            );
//=====================================================================

  export const MP_startAddExpense = (P_expenseData = {}) =>
  {
    return (P_dispatch, P_fn_get_state) =>
    {
      const
      {
                description = '',
                note = '',
                amount = 0,
                createdAt = 0
      } = P_expenseData;

      const L_expense = { description, note, amount, createdAt };

      const L_DB_ref = `users/${P_fn_get_state().auth.uid}/expenses`;
      //const L_DB_ref = `expenses`;
      console.log("   *** user ref", L_DB_ref);

//  SEC_015 --- 153. Testing Async Redux Actions: Part I 16:59
      //  return the promise
      return MP_database.ref(L_DB_ref).push(L_expense).then ( (ref) =>
      {
          P_dispatch ( MP_addExpense ( { id: ref.key, ...L_expense } ) );
      } );
    };
  }
//=====================================================================

export const MP_removeExpense = ( { id } = {} ) => (
        {
            type: MP_expense_actions.ACT_XP_REMOVE_EXPENSE,
            id
        }
                                   );
//=====================================================================

export const MP_startRemoveExpense = ({ id } = {}) => {
  return (dispatch, P_fn_get_state) => {
    const L_DB_ref = `users/${P_fn_get_state().auth.uid}/expenses/${id}`;
    return MP_database.ref(L_DB_ref).remove().then(() => {
      dispatch(MP_removeExpense({ id }));
    });
  };
};
//=====================================================================

export const MP_editExpense = ( id, updates ) => (
        {
            type: MP_expense_actions.ACT_XP_EDIT_EXPENSE,
            id,
            updates
        }
                                          );
//=====================================================================

export const MP_startEditExpense = (id, updates) => {
  return (dispatch, P_fn_get_state) => {
    const L_DB_ref = `users/${P_fn_get_state().auth.uid}/expenses/${id}`;
    return MP_database.ref(L_DB_ref).update(updates).then(() => {
      dispatch(MP_editExpense(id, updates));
    });
  };
};
//=====================================================================

export const MP_setExpenses = (expenses) =>
( {
  type: MP_expense_actions.ACT_XP_SET_EXPENSES,
  expenses
} );
//=====================================================================

export const MP_startSetExpenses = () => {
  return (dispatch, P_fn_get_state) => {
    const L_DB_ref = `users/${P_fn_get_state().auth.uid}/expenses`;
    return MP_database.ref(L_DB_ref)
                      .once('value')
                      .then((snapshot) => {
      const L_expenses = [];

      snapshot.forEach((childSnapshot) => {
        L_expenses.push ( {
          id: childSnapshot.key,
          ...childSnapshot.val()
        } );
      } );

      dispatch(MP_setExpenses(L_expenses));
    }   );
  };
};
//=====================================================================
//=====================================================================

//##########################################################################
//##########################################################################
