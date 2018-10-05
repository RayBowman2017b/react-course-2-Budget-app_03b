
//  index.js


/*

        COPIED FROM  sec012a_app.jsx

K:\A01_Udemy\Budget-app_03\src\sec012a_app.jsx

For some people, it solved the problem with
Entry module not found: Error: Can't resolve './src'

It did not work for me.

 */

console.log (" sec012a_app.jsx is running!");

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import SFC_app_router from './sec009a_routers/sec009a_app_router.jsx';

import MP_configure_store from "./sec011a_L099_store/sec011a_L099_STR_configure_store.jsx";

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

import { MP_addExpense, MP_removeExpense, MP_editExpense } from "./sec011a_L099_actions/sec011a_L099_ACTN_expenses.jsx";
import  MP_getVisibleExpenses from "./sec011a_L099_selectors/sec011a_L099_SLCT_expenses.jsx";

//=====================================================================

const GC_store = MP_configure_store ();

//if (false)
{

const L_august_01_2018 = 1533142800000;
const L_august_03_2018 = 1533315600000;
const L_sept_04_2018 = 1536080400000;


GC_store.dispatch ( MP_addExpense ({ description: 'Water Bill', amount: 3300, createdAt: L_august_01_2018 }) );
GC_store.dispatch ( MP_addExpense ({ description: 'Gas Bill', amount: 2200, createdAt: L_august_03_2018 }) );
GC_store.dispatch ( MP_addExpense ({ description: 'Rent', amount: 109500, createdAt: L_sept_04_2018 }) );

GC_store.subscribe ( () =>
  {
    const L_state = GC_store.getState ();
    const L_visibleExpenses = MP_getVisibleExpenses (L_state.expenses, L_state.filters);
    console.log (L_visibleExpenses);
  }                );

}


console.log ("  --- GC_store.getState()", GC_store.getState());


const GC_provider_for_router = (
    <Provider store={GC_store}>
        <SFC_app_router />
    </Provider>
    );



const GC_appRoot_01 = document.getElementById('sec011_app_01');

ReactDOM.render
      (GC_provider_for_router,
       GC_appRoot_01);

//=====================================================================
//=====================================================================

