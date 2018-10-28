
/*

seed_database.jsx

import seed_DB from "./Utilities_01/seed_database.jsx";

*/

import MP_moment from 'moment';
import  MP_getVisibleExpenses from "./sec011a_L099_selectors/sec011a_L099_SLCT_expenses.jsx";
import { MP_startAddExpense } from "./sec011a_L099_actions/sec011a_L099_ACTN_expenses.jsx";

export default  () => {

const L_august_01_2018 = 1533142800000;
const L_august_03_2018 = 1533315600000;
const L_sept_04_2018 = 1536080400000;
const GC_time_01 = MP_moment.utc().valueOf();
const GC_time_02 = MP_moment.utc().add(3, 'days').valueOf();
const GC_time_03 = MP_moment.utc().add(33, 'days').valueOf();

GC_store.dispatch ( MP_startAddExpense ({ description: 'Water Bill', amount: 3300, createdAt: GC_time_01 }) );
GC_store.dispatch ( MP_startAddExpense ({ description: 'Gas Bill', amount: 2200, createdAt: GC_time_02 }) );
GC_store.dispatch ( MP_startAddExpense ({ description: 'Rent', amount: 109500, createdAt: GC_time_03 }) );

GC_store.subscribe ( () =>
  {
    const L_state = GC_store.getState ();
    const L_visibleExpenses = MP_getVisibleExpenses (L_state.expenses, L_state.filters);
    console.log (L_visibleExpenses);
  }                );

console.log ("  --- GC_store.getState()", GC_store.getState());
};

