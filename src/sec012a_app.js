
/*

  sec012a_app.jsx

 */

console.log (" sec012a_app.jsx is running!");

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import MP_moment from 'moment';

import SFC_app_router from './sec009a_routers/sec009a_app_router.jsx';

import MP_configure_store from "./sec011a_L099_store/sec011a_L099_STR_configure_store.jsx";

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import  './sec014a_firebase/sec014_L142_firebase.js';

import { MP_startAddExpense, MP_startSetExpenses }
  from "./sec011a_L099_actions/sec011a_L099_ACTN_expenses.jsx";

//  SEC_016 --- 162. Login Page and Google Authentication 19:26
import { firebase, MP_database } from './sec014a_firebase/sec014_L142_firebase.js';

import  MP_getVisibleExpenses from "./sec011a_L099_selectors/sec011a_L099_SLCT_expenses.jsx";

//=====================================================================

const GC_store = MP_configure_store ();

if (false)
{

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

}


const GC_provider_for_router = (
    <Provider store={GC_store}>
        <SFC_app_router />
    </Provider>
    );


const GC_appRoot_01 = document.getElementById('sec011_app_01');

ReactDOM.render(<p>Loading...</p>, GC_appRoot_01);

GC_store.dispatch(MP_startSetExpenses())
        .then ( () => {
          ReactDOM.render(GC_provider_for_router, GC_appRoot_01);
                      }
              )
        .catch ((err) => console.log (` ******** ERROR in app.jsx :: ${err}`) );

//=====================================================================

//  SEC_016 --- 162. Login Page and Google Authentication 19:26

firebase.auth().onAuthStateChanged ( (P_user) => {
  if (P_user) {
    console.log("log in", P_user);
  } else {
    console.log("log out", P_user);
  }
} );

//=====================================================================
//=====================================================================
