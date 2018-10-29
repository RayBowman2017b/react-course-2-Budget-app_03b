
/*
  sec012a_app.jsx
 */

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import SFC_app_router, { MP_history } from './sec009a_routers/sec009a_app_router.jsx';

import MP_configure_store from "./sec011a_L099_store/sec011a_L099_STR_configure_store.jsx";

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import  './sec014a_firebase/sec014_L142_firebase.js';

import { MP_startSetExpenses } from "./sec011a_L099_actions/sec011a_L099_ACTN_expenses.jsx";

//  SEC_016 --- 162. Login Page and Google Authentication 19:26
import { firebase } from './sec014a_firebase/sec014_L142_firebase.js';

import { MP_login, MP_logout } from './sec011a_L099_actions/sec016a_L162_ACTN_auth.jsx';

//=====================================================================

const GC_store = MP_configure_store ();

// import seed_DB from "./Utilities_01/seed_database.jsx";
// seed_DB();

const GC_provider_for_router = (
    <Provider store={GC_store}>
        <SFC_app_router />
    </Provider>
);

const GC_render_CTRL = {
  has_rendered: false,
  appRoot_01 : document.getElementById('sec011_app_01'),
  render_app_loading () {
    ReactDOM.render(<p>Loading...</p>, this.appRoot_01);
  },
  render_app ()  {
    if ( ! this.has_rendered )  {
          ReactDOM.render(GC_provider_for_router, this.appRoot_01);
          this.has_rendered = true;
    }
  }
};
//=====================================================================

GC_render_CTRL.render_app_loading ();

console.log (" sec012a_app.jsx is running!");

firebase.auth().onAuthStateChanged ( (P_user) => {

  if (P_user) {

    console.log("log in", P_user);
    GC_store.dispatch(MP_login(P_user.uid));

    GC_store.dispatch(MP_startSetExpenses())
            .then ( () => {
              GC_render_CTRL.render_app ();
                          }
                  )
            .catch ((err) => console.log
                       (` ******** ERROR in app.jsx :: ${err}`) );

    if (MP_history.location.pathname === '/')
      MP_history.push('/dashboard');

  } else {
    console.log("log out", P_user);
    GC_store.dispatch(MP_logout());
    GC_render_CTRL.render_app ();
    MP_history.push('/');
  }
} );

//=====================================================================
//=====================================================================
